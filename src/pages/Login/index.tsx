import { useState, useEffect } from "react";
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useUserContext from "../../hooks/useUserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../services/autenticacaoService";

import { FieldValues, schema } from './validationSchema'

import { AutenticacaoData } from "../../interfaces/Autenticacao";

import SmallSpinner from "../../components/SmallSpinner";

import { FcMoneyTransfer } from 'react-icons/fc';

import { Container } from "./styles";


const Login = () => {
    const { setCurrentUser } = useUserContext();
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        resolver: yupResolver(schema),
    })

    const navigate = useNavigate();

    useEffect(() => {
        setCurrentUser(null);
    }, [])

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true);

        await login(data as AutenticacaoData)
        .then(resp => {console.log(resp)
            if (resp.status === 200) {
                setCurrentUser(resp.data);
                navigate('/');
            } else {
                toast.error(resp);
            }
        })

        setIsLoading(false);
    }

    return (
        <Container>
            {/* <nav>
                <ul>
                    <li>Sobre</li>
                </ul>
            </nav> */}

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

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Login</h1>
                    <div>
                        <div className="field">
                            <label htmlFor='login'>Usuário</label>
                            <Controller
                                name='login'
                                control={control}
                                render={({ field }) => (
                                    <input type='text' id='login' autoComplete='email' placeholder="Usuário" {...field} />
                                )}
                            />
                            {errors.login && <p className='error'>{errors.login.message}</p>}
                        </div>

                        <div className="field">
                            <label htmlFor='password'>Senha</label>
                            <Controller
                                name='password'
                                control={control}
                                render={({ field }) => (
                                    <input type='password' id='password' placeholder="Senha" {...field} />
                                )}
                            />
                            {errors.password && <p className='error'>{errors.password.message}</p>}
                        </div>

                        {/* <div className="links">
                            <Link 
                                to="/recovery"
                            >Esqueci a Senha</Link>

                            <Link 
                                to="/create-account"
                            >Criar uma conta</Link>
                        </div> */}
                    </div>
                    
                    <button type="submit">{isLoading ? <SmallSpinner/> : "Acessar"}</button>
                </form>
            </div>
        </Container>
    )
}

export default Login;