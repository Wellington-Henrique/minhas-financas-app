import{ useState, useEffect } from 'react';

import MenuLink from '../MenuLink';

import { CgMenu } from 'react-icons/cg';
import { LuLayoutDashboard } from 'react-icons/lu';
import { PiArrowFatLinesUpBold } from 'react-icons/pi';
import { PiArrowFatLinesDownBold } from 'react-icons/pi';
import { ImExit } from 'react-icons/im';

import { Container } from './styles';

const Sidebar = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const [ windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);

    const toogle = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        function updateTableComponentBasedInWindowWidth () {
            const currentWidth = document.documentElement.clientWidth;
            setWindowWidth(currentWidth);
        }

        window.addEventListener('resize', updateTableComponentBasedInWindowWidth)
        
		setIsMenuOpen(windowWidth > 720);

        return () => {
            window.removeEventListener('resize', updateTableComponentBasedInWindowWidth)
        }
    }, [])

    return (
        <Container isMenuOpen={isMenuOpen}>
            {windowWidth <= 720 &&
            <button type='button' onClick={toogle}>
                <CgMenu/>
            </button>}

            <div className='bg-sidebar' onClick={toogle}/>
            
            <nav>
                <div>
                    { isMenuOpen && <span>Olá, {"Wellington"}!</span> }
                    <div>
                        <button type='button' >
                            <CgMenu onClick={toogle}/>
                        </button>
                    </div>
                </div>

                <ul>
                    <MenuLink toogle={() => isMenuOpen && toogle()} path='/dashboard' Icon={LuLayoutDashboard} title='Dashboard'/>
                    <MenuLink toogle={() => isMenuOpen && toogle()} path='/income' Icon={PiArrowFatLinesUpBold} title='Receitas'/>
                    <MenuLink toogle={() => isMenuOpen && toogle()} path='/expense' Icon={PiArrowFatLinesDownBold} title='Despesas'/>
                    {/* <MenuLink toogle={() => isMenuOpen && toogle()} path='/settings' Icon={AiOutlineSetting} title='Configurações'/> */}
                    <MenuLink toogle={() => isMenuOpen && toogle()} path='/login' Icon={ImExit} title='Sair'/>
                </ul>
            </nav>
        </Container>
    );
}

export default Sidebar;