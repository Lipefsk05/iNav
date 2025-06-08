import styles from './Footer.module.css'
import heart from '../../assets/img/heart.svg'

function Footer() {
    return (
        <footer className={styles.footer}>

            <h4>&copy; 2025 iNav</h4>
            <section className={styles.menssage}>
                <h4>Feito com</h4>
                <img src={heart} alt="coração" />
                <h4>por Lipe Fenske</h4>
            </section>
        </footer>
    )
}

export default Footer