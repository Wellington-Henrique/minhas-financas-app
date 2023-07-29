import { useState, useEffect } from 'react';

import { DespesaData } from "../../../interfaces/Despesa";
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
    despesas: DespesaData[]
    handleLoad: (despesa: DespesaData) => void;
    handleDelete: (despesa: DespesaData) => void;
    handleClose: (despesa: DespesaData) => void;
    handleOpen: (despesa: DespesaData) => void;
}

export default function ({ despesas, handleLoad, handleDelete, handleOpen, handleClose }: TableDesktopProps) {
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
            {despesas.map(despesa => 
              <tr key={despesa.id}>
                <td>{despesa.description}</td>
                <td className='text-center'>{despesa.price && currencyFormatter(despesa.price)}</td>
                <td className='text-center'>{despesa.categoryId && categories.find(category => category.id === despesa.categoryId)?.description}</td>
                <td className='text-center'>{despesa.dueDate && dateFormatter(new Date(despesa.dueDate))}</td>
                <td><PaymentStatus status={despesa.status}/></td>
                <td className="action">
                { despesa.status === 0 ?
                  <>
                    <div>
                      <FiEdit onClick={() => handleLoad(despesa)}/>
                    </div>
                    
                    <ToogleButton onSubmit={async () => handleDelete(despesa)}>
                      <RiDeleteBin6Line/>
                    </ToogleButton>

                    <ToogleButton onSubmit={async () => handleClose(despesa)}>
                      <MdOutlineDoneAll/>
                    </ToogleButton>
                  </>  
                  : <ToogleButton onSubmit={ async () => handleOpen(despesa)}>
                      <MdOutlineRemoveDone/>
                    </ToogleButton>}
                </td>
              </tr>)}
          </tbody>
      </Container>
  )
}