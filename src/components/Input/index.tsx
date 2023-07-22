import { Container } from './styles';

interface InputProps {
    className?: string
    name: string
    title?: string
    placeholder?: string
    type?: string
    value: any
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean
}

const Input = ({ className='', name, title, placeholder, type='text', value, onChange, disabled=false } : InputProps) => {
  return (
    <Container className={className}>
        {title && <label htmlFor={name}>{title}</label>}
        <input
            id={name}
            name={name}
            placeholder={placeholder ?? title}
            type={type}
            value={value ?? ""}
            onChange={(e) => onChange(e)}
            disabled={disabled}
        />
    </Container>
  )
}

export default Input;