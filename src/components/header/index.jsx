import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">iNav</Link>

            <nav>
                <Link to="/features">Features</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
        </header>
    )
}

export default Header