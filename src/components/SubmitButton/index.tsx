import { useState } from "react";

import { Button } from "reactstrap";

import  { FiLoader } from 'react-icons/fi';

import { Container } from "./styles";

interface SubmitButtonProps {
    title?: string
    color?: string
    className?: string
    onSubmit: () => Promise<void>;
}

const SubmitButton = ({ title="Salvar", onSubmit, color="success", className="" } : SubmitButtonProps) => {
    const [isLoading, setIsLoading ] = useState<boolean>(false);

    const handleClick = async () => {
        setIsLoading(true);

        await onSubmit();

        setIsLoading(false);
    }

    return (
        <Container className={className} isLoading={isLoading}>
            <Button
                color={color}
                className="spinner" 
                onClick={handleClick}
                ><span>{title}</span>{ isLoading && <FiLoader/>}
            </Button>
        </Container>
    );
}

export default SubmitButton;