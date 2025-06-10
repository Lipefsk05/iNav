import styles from './Sobre.module.css'

import TitleSection from '../../components/title_section'
import MyProfile from '../../assets/img/MyProfile.svg'



function Sobre() {
    return (
        <main>

            <section className={styles.banner}>
                <h2>Nossa <span>missão</span> é transformar a experiência de compra em grandes centros comerciais, tornando-a mais simples, rápida e agradável.</h2>
                <img src={MyProfile} alt="foto de perfil" />
            </section>
            
            <section className={styles.boxes}>
                <article className={styles.box}>
                    <TitleSection title="Historia do projeto"/>
                    <p>A ideia do iNav nasceu de uma experiência quase universal. Eu sempre tive dificuldade para me orientar em grandes centros comerciais; são tantos corredores e lojas que é muito fácil se sentir perdido. Um dia, em uma conversa com meu pai, dividi essa frustração e começamos a imaginar uma solução. A faísca acendeu bem na época em que eu tinha acabado de entrar na faculdade de Ciência da Computação. Unimos uma necessidade real com a nova paixão pelos códigos, e assim surgiu o primeiro rascunho do nosso GPS indoor: uma forma de ajudar qualquer pessoa a se locomover com mais eficiência e menos estresse.</p>
                </article>
                <article className={styles.box}>
                    <TitleSection title="Quem eu sou"/>
                    <p>Felipe Fenske, desenvolvedor e a mente por trás do iNav. Ele é apaixonado por usar a liberdade criativa da programação para resolver problemas reais. Por isso, abraçou o desafio da navegação indoor para garantir que a única preocupação de quem visita os grandes centros de BH seja aproveitar o passeio, e não decifrar o mapa. Nas horas vagas, troca os algoritmos pelas quadras para um bom jogo de basquete.</p>
                </article>
            </section>

        </main>
    )
}

export default Sobre