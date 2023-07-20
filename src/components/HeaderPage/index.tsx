import { Container } from "./styles"

interface HeaderPageProps {
  title: string
}

export const HeaderPage = ({title} : HeaderPageProps) => {
  return (
    <Container>
      <span>{title}</span>
    </Container>
  )
}