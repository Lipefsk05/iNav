import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import CompassLogo from '../../assets/img/compassLogo.svg'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/"><span>iNav</span></Link>

            <nav className={styles.pages}>
                <Link to="/features"><span>Features</span></Link>
                <Link to="/sobre"><span>Sobre</span></Link>
                <Link to="/contatos"><span>Contatos</span></Link>
            </nav>
        </header>
    )
}

export default Header