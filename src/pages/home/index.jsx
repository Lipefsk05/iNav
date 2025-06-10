//  Styles
import styles from './Home.module.css'

//  Components

import LittleButton from '../../components/littleButton'
import BigButton from '../../components/bigButton'

//Img
import BannerImg from '../../assets/img/Banner.svg'
import ProblemImg from '../../assets/img/problem.svg'
import Mobile1 from '../../assets/img/Mobile1.svg'
import Mobile2 from '../../assets/img/Mobile2.svg'
import Mobile3 from '../../assets/img/Mobile3.svg'
import Mobile4 from '../../assets/img/Mobile4.svg'


//Icons
import Compass from '../../assets/img/compass.svg'
import Lupe from '../../assets/img/lupe.svg'
import Path from '../../assets/img/path.svg'
import Star from '../../assets/img/star.svg'



function Home() {
    return (
        <main>
            <section className={styles.banner}>
                <article className={styles.bannerText}>
                    <h1>
                        <span>Encontre</span> <br />
                        sua loja <br />
                        em segundos
                    </h1>
                    <p>Navegue com precisão com localização em tempo real e mapas interativos.</p>
                </article>
                <img src={BannerImg} alt="Imagem do banner" />
            </section>

            <section className={styles.little_buttons}>

                <LittleButton
                    img={Compass}
                    texto={<>{'Mapa em'} <br /> {'tempo real'}</>} />

                <LittleButton
                    img={Lupe}
                    texto={<>{'Pesquisa'} <br /> {'por loja'}</>} />

                <LittleButton
                    img={Path}
                    texto={<>{'Definição'} <br /> {'de rotas'}</>} />

            </section>

            <section className={styles.problem}>
                <img src={ProblemImg} alt="Imagem do banner" />
                <article>
                    <h2>Já se sentiu <span>perdido?</span></h2>
                    <p>Tentou encontrar aquela loja específica no meio de
                        centenas de corredores? Com o InNav, você tem o mapa
                        completo na sua mão. Pesquise, encontre o caminho mais
                        curto e chegue ao seu destino sem estresse.</p>
                </article>
            </section>

            <section className={styles.features}>
                <BigButton
                    img={Compass}
                    tittle="Mapa Interativo"
                    texto="Veja sua localização exata no mapa em tempo real enquanto você caminha." />

                <BigButton
                    img={Lupe}
                    tittle="Busca Inteligente"
                    texto="Procure por nome da loja, produto ou categoria e encontre o que precisa." />

                <BigButton
                    img={Path}
                    tittle="Navegação Guiada"
                    texto="Trace a melhor rota até qualquer loja e receba instruções passo a passo." />

                <BigButton
                    img={Star}
                    tittle="Avaliações e Recomendações "
                    texto="Descubra novas lojas e veja o que outros usuários estão dizendo." />

            </section>

            <section className={styles.user_flow}>
                <article className={styles.flow1}>
                    <img src={Mobile1} alt="mobile image 1" />
                    <div>
                        <p>Abra o App
                            aplicativo assim
                            que entrar no local.</p>
                        <span>1</span>
                    </div>
                </article>

                <article className={styles.flow2}>
                    <div>
                        <span>2</span>
                        <p>Pesquise o local onde
                            você se encontra como
                            um mercado ou shopping</p>
                    </div>
                    <img src={Mobile2} alt="mobile image 2" />
                </article>

                <article className={styles.flow3}>
                    <img src={Mobile3} alt="mobile image 3" />
                    <div>
                        <p>Pesquise seu Destino
                            digitando o nome da
                            loja ou o que procura.</p>

                        <span>3</span>
                    </div>
                </article>

                <article className={styles.flow4}>
                    <div>
                        <span>4</span>

                        <p>Siga a rota e deixe
                            nosso guia levar
                            você até lá.</p>
                    </div>
                    <img src={Mobile4} alt="mobile image 4" />
                </article>

            </section>
        </main>
    )
}

export default Home