import { currencyFormatter } from '../../utils/formatter';
import { Container } from './styles';

interface DasboardCardProps {
    title: string
    value: number
    isIncome?: boolean
}

const DashbordCard = ({ title, value, isIncome=false } : DasboardCardProps) => {
  return (
    <Container isIncome={isIncome}>
        <div>
          <span>{title}</span>
        </div>
        <div>
          <span>{currencyFormatter(value)}</span>
        </div>
    </Container>
  )
}

export default DashbordCard;