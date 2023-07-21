import { Container } from './styles';

interface InputProps {
    className?: string
    name: string
    title?: string
    placeholder?: string
    value: any
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean
}

export const Input = ({ className='', name, title, placeholder, value, onChange, disabled=false } : InputProps) => {
  return (
    <Container>
        {title && <label htmlFor={name}>{title}</label>}
        <input
            className={className}
            id={name}
            name={name}
            placeholder={placeholder ?? title}
            value={value ?? ""}
            onChange={(e) => onChange(e)}
            disabled={disabled}
        />
    </Container>
  )
}