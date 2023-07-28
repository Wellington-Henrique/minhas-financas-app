import { currencyFormatter } from '../../utils/formatter';

import { Container } from './styles';

interface TotalProps {
    total: number
    title: string
}

const Total = ({ total, title } : TotalProps) => {
  return (
    <Container>
      <p>{title}</p>
      <p>{currencyFormatter(total)}</p>
    </Container>
  );
};

export default Total;