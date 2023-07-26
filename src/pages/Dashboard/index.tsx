import { useState, useEffect } from 'react';
import { getDespesasByDate } from '../../services/despesaService';
import { getReceitasByDate } from '../../services/receitaService';

import { ReceitaData } from '../../interfaces/Receita';

import { HeaderPage } from '../../components/HeaderPage';
import DashboardCard from '../../components/DashboardCard';
import Spinner from '../../components/Spinner';

import { Container } from './styles';
import { DespesaData } from '../../interfaces/Despesa';

export default function Dashboard() {
  const [ totalIncomes, setTotalIncomes ] = useState<number>(0);
  const [ totalIncomesOk, setTotalIncomesOk ] = useState<number>(0);
  const [ totalExpenses, setTotalExpenses ] = useState<number>(0);
  const [ totalExpensesOk, setTotalExpensesOk ] = useState<number>(0);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const dt = new Date();

    Promise.all([
      getReceitasByDate(new Date(dt.getFullYear(), dt.getMonth(), 1).toISOString(), dt.toISOString()),
      getDespesasByDate(new Date(dt.getFullYear(), dt.getMonth(), 1).toISOString(), dt.toISOString()),
    ]).then(resp => {
      setIsLoading(false);

      if (resp[0].status === 201) {
        const receitas = resp[0].data as ReceitaData[];

        const incomes = receitas.reduce(function(total, receita) {
          return total + receita.price;
        }, 0);

        const incomesOk = receitas.reduce(function(total, receita) {
          return receita.status === 1 ? total + receita.price : total;
        }, 0);

        setTotalIncomes(incomes);
        setTotalIncomesOk(incomesOk);
      }

      if (resp[1].status === 201) { 
        const despesas = resp[1].data as DespesaData[];

        const expenses = despesas.reduce(function(total, despesa) {
          return total + despesa.price;
        }, 0);

        const expensesOk = despesas.reduce(function(total, despesa) {
          return despesa.status === 1 ? total + despesa.price : total;
        }, 0);

        setTotalExpenses(expenses);
        setTotalExpensesOk(expensesOk);
      }
    });
  }, []);

  return (
    <Container>
      <HeaderPage title='Dashboard'/>
      {isLoading ?
        <Spinner/>
      : <>
        <div className='content'>
          <div className='session'>
            <p>Lançamentos totais</p>
            <DashboardCard title={"Receitas"} value={totalIncomes} isIncome={true}/>
            <DashboardCard title={"Despesas"} value={totalExpenses}/>
            <DashboardCard title={"Saldo"} value={totalIncomes-totalExpenses} isIncome={totalIncomes >= totalExpenses}/>
          </div>

          <div className='session'>
            <p>Totais líquidados</p>
            <DashboardCard title={"Receitas"} value={totalIncomesOk} isIncome={true}/>
            <DashboardCard title={"Despesas"} value={totalExpensesOk}/>
            <DashboardCard title={"Saldo"} value={totalIncomesOk-totalExpensesOk} isIncome={totalIncomesOk >= totalExpensesOk}/>
          </div>
        </div>
      </>}
    </Container>
  )
}