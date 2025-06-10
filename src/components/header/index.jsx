import { Link } from 'react-router-dom'
import { useState } from 'react'

import styles from './Header.module.css'
import List from '../../assets/img/list.svg'

function Header() {

    const [ showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className={styles.header}>
            <Link to="/"><span>iNav</span></Link>

            <nav className={`${styles.pages} ${ showMenu ? styles.show : ''}`}
            onClick={toggleMenu}
            >
                <Link to="/features"><span>Features</span></Link>
                <Link to="/sobre"><span>Sobre</span></Link>
                <Link to="/contatos"><span>Contatos</span></Link>
            </nav>

            <img src={List} alt=""
            className={styles.menu_hamburguer}
            onClick={toggleMenu}
            />

        </header>
    )
}

export default Header