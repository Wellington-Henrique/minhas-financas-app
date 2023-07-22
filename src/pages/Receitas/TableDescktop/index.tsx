import { useState, useEffect } from 'react';

import { ReceitaData } from "../../../interfaces/Receita";
import { CategoriaData } from "../../../interfaces/Categoria";

import { PaymentStatus } from "../../../components/PaymentStatus";
import { currencyFormatter, dateFormatter } from "../../../utils/formatter";

import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdOutlineDoneAll } from 'react-icons/md';
import { MdOutlineRemoveDone } from 'react-icons/md';

import { Container } from "./styles";
import { getCategoryByType } from '../../../services/categoriaService';
import ToogleButton from '../../../components/ToggleSubmit';

interface TableDesktopProps {
    receitas: ReceitaData[]
    handleLoad: (receita: ReceitaData) => void;
    handleDelete: (id: number) => void;
    handleClose: (id: number) => void;
    handleOpen: (id: number) => void;
}

export default function ({ receitas, handleLoad, handleDelete, handleOpen, handleClose }: TableDesktopProps) {
  const [categories, setCategories] = useState<CategoriaData[]>([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
      await getCategoryByType("R")
      .then(resp => setCategories(resp.data ?? []));
  }

  return (
      <Container className='w-100'>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th className='text-center'>Categoria</th>
              <th className='text-center'>Vencimento</th>
              <th className='text-center'>Status</th>
              <th className="text-center">Ação</th>
            </tr>
          </thead>

          <tbody>
            {receitas.map(receita => 
              <tr key={receita.id}>
                <td>{receita.description}</td>
                <td className='text-center'>{receita.price && currencyFormatter(receita.price)}</td>
                <td className='text-center'>{receita.categoryId && categories.find(category => category.id === receita.categoryId)?.description}</td>
                <td className='text-center'>{receita.dueDate && dateFormatter(new Date(receita.dueDate))}</td>
                <td><PaymentStatus status={receita.status}/></td>
                <td className="action">
                { receita.status === 0 ?
                  <>
                    <div>
                      <FiEdit onClick={() => handleLoad(receita)}/>
                    </div>
                    
                    <ToogleButton onSubmit={async () => handleDelete(receita.id)}>
                      <RiDeleteBin6Line/>
                    </ToogleButton>

                    <ToogleButton onSubmit={async () => handleClose(receita.id)}>
                      <MdOutlineDoneAll/>
                    </ToogleButton>
                  </>  
                  : <ToogleButton onSubmit={ async () => handleOpen(receita.id)}>
                      <MdOutlineRemoveDone/>
                    </ToogleButton>}
                </td>
              </tr>)}
          </tbody>
      </Container>
  )
}