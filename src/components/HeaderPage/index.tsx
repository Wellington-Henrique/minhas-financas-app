import { Container } from "./styles"

interface HeaderPageProps {
  title: string
}

export const HeaderPage = ({title} : HeaderPageProps) => {
  document.title = `${title} | Minhas finanças`;

  return (
    <Container>
      <span>{title}</span>
    </Container>
  )
}