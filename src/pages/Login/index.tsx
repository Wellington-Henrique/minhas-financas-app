import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../services/autenticacaoService";

import { AutenticacaoData } from "../../interfaces/Autenticacao";

import { initialValues } from "./data";
import useUserContext from "../../hooks/useUserContext";

import Input from "../../components/Input";

import { FcMoneyTransfer } from 'react-icons/fc';

import { Container } from "./styles";


const Login = () => {
    const [authentication, setAuthentication] = useState<AutenticacaoData>(initialValues);
    const { setCurrentUser } = useUserContext();

    const navigate = useNavigate();

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        
        setAuthentication(prevState => {
            return {...prevState, [name]: value};
        });
    }

    const onSubmit = async (e: any) => {
        e.preventDefault();

        await login(authentication)
        .then(resp => {console.log(resp)
            if (resp.status === 200) {
                setCurrentUser(resp.data);
                navigate('/');
            } else {
                toast.error(resp);
            }
        })
    }

    return (
        <Container>
            <nav>
                <ul>
                    <li>Sobre</li>
                </ul>
            </nav>

            <div>
                <div>
                    <div className="mb-4">
                        <FcMoneyTransfer/>

                        <div>
                            <h1>Gerencie sua vida financeira em um só lugar!</h1>
                            <p className="mb-4">Com o aplicativo <strong>Minhas finanças</strong>, você pode gerenciar suas receitas, despesas e gastos com cartão de crédito.</p>
                            <h1 className="mb-4">E o melhor, gratuitamente!</h1>
                            <p>Tá esperando o que para organizar a sua vida financeira?</p>
                            <p><strong>Entre ou crie</strong> uma conta grátis!</p>
                        </div>
                    </div>
                </div>

                <form>
                    <Input
                        title="Usuário"
                        name="login"
                        type="email"
                        value={authentication.login}
                        onChange={handleChange}
                    />

                    <Input
                        title="Senha"
                        name="password"
                        type="password"
                        value={authentication.password}
                        onChange={handleChange}
                    />

                    <Link 
                        to="/recovery" 
                        className="mb-4"
                    >Esqueci a Senha</Link>
                    
                    <button type="submit" onClick={(e) => onSubmit(e)}>Acessar</button>
                </form>
            </div>
        </Container>
    )
}

export default Login;