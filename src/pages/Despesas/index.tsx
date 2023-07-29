import { useEffect, useState } from 'react';
import useUserContext from '../../hooks/useUserContext';

import { HeaderPage } from '../../components/HeaderPage';
import { DespesaData } from '../../interfaces/Despesa';
import { Container } from './styles';
import { closeDespesa, deleteDespesa, getDespesasByDate, openDespesa } from '../../services/despesaService';
import TableDesktop from './TableDesktop';
import { toast } from 'react-toastify';
import { ModalDespesa } from '../../components/ModalDespesa';
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

export default function Despesas() {
  const { currentUser } = useUserContext();
  const [despesas, setDespesas] = useState<DespesaData[]>([]);
  const [currentDespesa, setCurrentDespesa] = useState<DespesaData | null>(null);
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
    getDespesas();
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
    await getDespesas();
  }

  const handleLoad = (data: DespesaData | null) => {
    setCurrentDespesa(data);
    setModalIsOpen(true);
  }

  const handleDelete = async (data: DespesaData) => {
    setCurrentDespesa(data);
    toggleConfirmDelete();
  }

  const deleteExpense = async (id: number) => {
    await deleteDespesa(id, `${currentUser?.token}`).then(resp => {
      if (resp.status === 200) {
        const newList = despesas.filter(despesa => despesa.id !== id);
        setDespesas(newList);
        getTotals(newList);
        toast.success(resp.message);
      }
      else {
        toast.error(resp);
      }
    })
  }

  const handleClose = async (data: DespesaData) => {
    setCurrentDespesa(data);
    toggleConfirmClose();
  }

  const closeExpense = async (id: number) => {
    await closeDespesa(id, `${currentUser?.token}`).then(resp => {
      if (resp.status === 201) {
        updateList(resp.data);
        toast.success(resp.message);
      }
      else {
        toast.error(resp);
      }
    })
  }

  const handleOpen = async (data: DespesaData) => {
    setCurrentDespesa(data);
    toggleConfirmReOpen();
  }

  const reOpenExpense = async (id: number) => {
    await openDespesa(id, `${currentUser?.token}`).then(resp => {
      if (resp.status === 201) {
        setCurrentDespesa(null)
        updateList(resp.data);
        toast.success(resp.message);
      }
      else {
        toast.error(resp);
      }
    })
  }

  const getDespesas = async () => {
    setIsLoading(true);
    
    await getDespesasByDate(filter.startDate, filter.endDate, `${currentUser?.token}`)
    .then(resp => { 
        if (resp.status === 200) {
          setDespesas(resp.data);
          getTotals(resp.data);
        } else {
          toast.error(resp);
          setDespesas([]);
        }

        setIsLoading(false);
      }
    );
  }

  const updateList = (updatedDespesa: DespesaData) => {
    setDespesas(prevState => {
      const newList = prevState.map(despesa => { 
        if (despesa.id === updatedDespesa.id) 
          return updatedDespesa
        else
          return despesa
      });
      
      getTotals(newList);
      
      return newList;
    });
  }

  const addToList = (despesa: DespesaData) => {
    setDespesas(prevState => {
      const newList = prevState;
      newList.unshift(despesa);
      getTotals(newList);

      return newList;
    });
  }

  const getTotals = (despesas: DespesaData[]) => {
    if (despesas?.length) {
      const tot = despesas.reduce(function(total, despesa) {
        if (!despesa.price) return total;
  
        return total + despesa.price;
      }, 0);
  
      const payed = despesas.reduce(function(total, despesa) {
        if (!despesa.price || despesa.status === 0) return total;
  
        return total + despesa.price;
      }, 0);
  
      const pending = despesas.reduce(function(total, despesa) {
        if (!despesa.price || despesa.status === 1) return total;
  
        return total + despesa.price;
      }, 0);
  
      setTotal(tot);
      setPayed(payed);
      setPending(pending);
    }
  }

  return (
    <>
      <Container>
        <HeaderPage title='Despesas'/>
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
                Nova despesa
              </Button>
            </div>
          </div>
        
          {isLoading ? 
            <Spinner/> 
          : <div className='table-container'>
              { despesas.length ? 
              <>
                <h5>Suas despesas encontradas durante o período informado.</h5>
                <TableDesktop 
                  despesas={despesas} 
                  handleLoad={handleLoad} 
                  handleDelete={handleDelete}
                  handleClose={handleClose}
                  handleOpen={handleOpen}
                />
              </>: <h5>Não foram encontradas despesas...</h5>}
            </div>}
            {!!despesas.length && 
            <div className='table-totals'>
              <Total title="Total: " total={total}/>
              <Total title="Pendente: " total={pending}/>
              <Total title="Recebido: " total={payed}/>
            </div>}
        </div>
      </Container>

      {currentDespesa &&
      <>
        <DialogConfirm
          title='Deletar despesa'
          body='Deseja realmente deletar a despesa?'
          confirmText='Deletar'
          isOpen={confirmDeleteIsOpen}
          submit={async () => deleteExpense(currentDespesa.id)}
          toggle={toggleConfirmDelete} 
        />

        <DialogConfirm
          title='Líquidar despesa'
          body='Deseja realmente líquidar a despesa?'
          isOpen={confirmCloseIsOpen}
          submit={async () => closeExpense(currentDespesa.id)}
          toggle={toggleConfirmClose} 
        />

        <DialogConfirm
          title='Reabrir despesa'
          body='Deseja realmente reabrir a despesa?'
          isOpen={confirmReOpenIsOpen}
          submit={async () => reOpenExpense(currentDespesa.id)}
          toggle={toggleConfirmReOpen} 
        />
      </>}

      <ModalDespesa 
        isOpen={modalIsOpen}
        addToList={addToList}
        updateList={updateList}
        toggle={() => setModalIsOpen(false)} 
        despesa={currentDespesa as DespesaData}
      />
    </>
  )
}