import { Container } from './styles';

interface PaymentStatusProps {
  status: number
}

export const PaymentStatus = ({ status } : PaymentStatusProps) => {
  return (
    <Container status={status}>
      {status === 0 ? 'Pendente' : "Recebido"}
    </Container>
  )
}