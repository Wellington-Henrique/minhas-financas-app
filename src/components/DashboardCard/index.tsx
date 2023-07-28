import { Link } from 'react-router-dom';
import { currencyFormatter } from '../../utils/formatter';
import { Container } from './styles';

interface DasboardCardProps {
    title: string
    value: number
    isIncome?: boolean
    to?: string
}

const DashbordCard = ({ title, value, isIncome=false, to='/' } : DasboardCardProps) => {
  return (
    <Container isIncome={isIncome}>
      <Link to={`/${to}`}>
        <div>
          <span>{title}</span>
        </div>
        <div>
          <span>{currencyFormatter(value)}</span>
        </div>
      </Link>
    </Container>
  )
}

export default DashbordCard;