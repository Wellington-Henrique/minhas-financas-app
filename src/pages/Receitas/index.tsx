import { useEffect, useState } from 'react';
import useUserContext from '../../hooks/useUserContext';

import { HeaderPage } from '../../components/HeaderPage';
import { ReceitaData } from '../../interfaces/Receita';
import { Container } from './styles';
import { closeReceita, deleteReceita, getReceitasByDate, openReceita } from '../../services/receitaService';
import TableDescktop from './TableDesktop';
import { toast } from 'react-toastify';
import { ModalReceita } from '../../components/ModalReceita';
import { Button } from 'reactstrap';
import DatePicker from '../../components/DatePicker';
import Spinner from '../../components/Spinner';
import { initialValues } from './data';
import Total from '../../components/Total';
import SubmitButton from '../../components/SubmitButton';
import DialogConfirm from '../../components/DialogConfirm';

interface SearchData {
  startDate: string
  endDate: string
}

export default function Receitas() {
  const { currentUser } = useUserContext();
  const [receitas, setReceitas] = useState<ReceitaData[]>([]);
  const [currentReceita, setCurrentReceita] = useState<ReceitaData | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<SearchData>(initialValues);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [payed, setPayed] = useState<number>(0);
  const [pending, setPending] = useState<number>(0);

  const [ confirmDeleteIsOpen, setConfirmDeleteIsOpen] = useState<boolean>(false);
  const [ confirmCloseIsOpen, setConfirmCloseIsOpen] = useState<boolean>(false);
  const [ confirmReOpenIsOpen, setConfirmReOpenIsOpen] = useState<boolean>(false);

  useEffect(() => {
    getReceitas();
  }, []);

  const toggleConfirmDelete = () => setConfirmDeleteIsOpen(!confirmDeleteIsOpen);
  const toggleConfirmClose = () => setConfirmCloseIsOpen(!confirmCloseIsOpen);
  const toggleConfirmReOpen = () => setConfirmReOpenIsOpen(!confirmReOpenIsOpen);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFilter(prevState => {
      return {...prevState, [name]: value};
    });
  }

  const handleSearch = async () => {
    await getReceitas();
  }

  const handleLoad = (data: ReceitaData | null) => {
    setCurrentReceita(data);
    setModalIsOpen(true);
  }

  const handleDelete = async (data: ReceitaData) => {
    setCurrentReceita(data);
    toggleConfirmDelete();
  }

  const deleteIncome = async (id: number) => {
    await deleteReceita(id, `${currentUser?.token}`).then(resp => {
      if (resp.status === 200) {
        const newList = receitas.filter(receita => receita.id !== id);
        setReceitas(newList);
        getTotals(newList);
        toast.success(resp.message);
      }
      else {
        toast.error(resp);
      }
    })
  }

  const handleClose = async (data: ReceitaData) => {
    setCurrentReceita(data);
    toggleConfirmClose();
  }

  const closeIncome = async (id: number) => {
    await closeReceita(id, `${currentUser?.token}`).then(resp => {
      if (resp.status === 201) {
        updateList(resp.data);
        toast.success(resp.message);
      }
      else {
        toast.error(resp);
      }
    })
  }

  const handleOpen = async (data: ReceitaData) => {
    setCurrentReceita(data);
    toggleConfirmReOpen();
  }

  const reOpenIncome = async (id: number) => {
    await openReceita(id, `${currentUser?.token}`).then(resp => {
      if (resp.status === 201) {
        updateList(resp.data);
        toast.success(resp.message);
      }
      else {
        toast.error(resp);
      }
    })
  }

  const getReceitas = async () => {
    setIsLoading(true);
    
    await getReceitasByDate(filter.startDate, filter.endDate, `${currentUser?.token}`)
    .then(resp => { 
        if (resp.status === 200) {
          setReceitas(resp.data);
          getTotals(resp.data);
        } else {
          toast.error(resp);
          setReceitas([]);
        }

        setIsLoading(false);
      }
    );
  }

  const updateList = (updatedReceita: ReceitaData) => {
    setReceitas(prevState => {
      const newList = prevState.map(receita => { 
        if (receita.id === updatedReceita.id) 
          return updatedReceita
        else
          return receita
      });
      
      getTotals(newList);
      
      return newList;
    });
  }

  const addToList = (receita: ReceitaData) => {
    setReceitas(prevState => {
      const newList = prevState;
      newList.unshift(receita);
      getTotals(newList);

      return newList;
    });
  }

  const getTotals = (receitas: ReceitaData[]) => {
    if (receitas?.length) {
      const tot = receitas.reduce(function(total, receita) {
        if (!receita.price) return total;
  
        return total + receita.price;
      }, 0);
  
      const payed = receitas.reduce(function(total, receita) {
        if (!receita.price || receita.status === 0) return total;
  
        return total + receita.price;
      }, 0);
  
      const pending = receitas.reduce(function(total, receita) {
        if (!receita.price || receita.status === 1) return total;
  
        return total + receita.price;
      }, 0);
  
      setTotal(tot);
      setPayed(payed);
      setPending(pending);
    }
  }

  return (
    <>
      <Container>
        <HeaderPage title='Receitas'/>
        <div className='content'>
          <div className='search'>
            <div>
              <DatePicker
                title="De"
                name="startDate"
                inLine={true}
                value={filter.startDate}
                onChange={handleChange}
              />

              <DatePicker
                title="Até"
                name="endDate"
                inLine={true}
                value={filter.endDate} 
                onChange={handleChange}
              />
            </div>

            <SubmitButton
              color="success" 
              onSubmit={handleSearch}
              title="Consultar"
            />

            <div>
              <Button color="success" onClick={() => handleLoad(null)}>
                Nova receita
              </Button>
            </div>
          </div>
        
          {isLoading ? 
            <Spinner/> 
          : <div className='table-container'>
              { receitas.length ? 
              <>
                <h5>Suas receitas encontradas durante o período informado.</h5>
                <TableDescktop 
                  receitas={receitas} 
                  handleLoad={handleLoad} 
                  handleDelete={handleDelete}
                  handleClose={handleClose}
                  handleOpen={handleOpen}
                />
              </>: <h5>Não foram encontradas receitas...</h5>}
            </div>}
            {!!receitas.length && 
            <div className='table-totals'>
              <Total title="Total: " total={total}/>
              <Total title="Pendente: " total={pending}/>
              <Total title="Recebido: " total={payed}/>
            </div>}
        </div>
      </Container>
      
      {currentReceita &&
      <>
        <DialogConfirm
          title='Deletar receita'
          body='Deseja realmente deletar a receita?'
          confirmText='Deletar'
          isOpen={confirmDeleteIsOpen}
          submit={async () => deleteIncome(currentReceita.id)}
          toggle={toggleConfirmDelete}
        />

        <DialogConfirm
          title='Líquidar receita'
          body='Deseja realmente líquidar a receita?'
          isOpen={confirmCloseIsOpen}
          submit={async () => closeIncome(currentReceita.id)}
          toggle={toggleConfirmClose} 
        />
        
        <DialogConfirm
          title='Reabrir receita'
          body='Deseja realmente reabrir a receita?'
          isOpen={confirmReOpenIsOpen}
          submit={async () => reOpenIncome(currentReceita.id)}
          toggle={toggleConfirmReOpen} 
        />
      </>}

      <ModalReceita 
        isOpen={modalIsOpen}
        addToList={addToList}
        updateList={updateList}
        toggle={() => setModalIsOpen(false)} 
        receita={currentReceita as ReceitaData}
      />
    </>
  )
}