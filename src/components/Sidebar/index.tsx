import{ useState } from 'react';

import MenuLink from '../MenuLink';

import { CgMenu } from 'react-icons/cg';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FaMoneyBillWave } from 'react-icons/fa';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import { ImExit } from 'react-icons/im';

import { Container } from './styles';

const Sidebar = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const toogle = () => setIsMenuOpen(!isMenuOpen);

    return (
        <Container isMenuOpen={isMenuOpen}>
            <button type='button' onClick={toogle}>
                <CgMenu/>
            </button>
            
            <nav>
                <ul>
                    <MenuLink path='/dashboard' Icon={LuLayoutDashboard} title='Dashboard'/>
                    <MenuLink path='/income' Icon={FaMoneyBillWave} title='Receitas'/>
                    <MenuLink path='/expense' Icon={FaMoneyBillAlt} title='Despesas'/>
                    <MenuLink path='/settings' Icon={AiOutlineSetting} title='Configurações'/>
                    <MenuLink path='/login' Icon={ImExit} title='Sair'/>
                </ul>
            </nav>
        </Container>
    );
}

export default Sidebar;