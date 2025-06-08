import Header from "../../components/header"
import Container from "../../components/container"
import Footer from "../../components/footer"
import styles from './Base.module.css'

import { Outlet } from "react-router-dom";


function Base() {
    return (
        <main className={styles.main}>
            <Header />
            <Container>
                <Outlet/>
            </Container>
            <Footer />
        </main>
    )
}

export default Base