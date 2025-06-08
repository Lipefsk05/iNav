//  Styles
import styles from './Home.module.css'

//  Components

import LittleButton from '../../components/littleButton'
import BigButton from '../../components/bigButton'

//Img
import BannerImg from '../../assets/img/Banner.svg'
import ProblemImg from '../../assets/img/problem.svg'


//Icons
import Compass from '../../assets/img/compass.svg'
import Lupe from '../../assets/img/lupe.svg'
import Path from '../../assets/img/path.svg'



function Home() {
    return (
        <main>
            <section className={styles.banner}>
                <article className={styles.bannetText}>
                    <h1>
                        <span>Encontre</span> <br />
                        sua loja <br />
                        em segundos
                    </h1>
                    <h2>Navegue com precisão com localização em <br />
                        tempo real e mapas interativos.</h2>
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
                    <p>Tentou encontrar aquela loja específica no meio de <br />
                        centenas de corredores? Com o InNav, você tem o mapa <br />
                        completo na sua mão. Pesquise, encontre o caminho mais <br />
                        curto e chegue ao seu destino sem estresse.</p>
                </article>
            </section>

            <section className={styles.features}>
                <BigButton
                    img={Compass}
                    tittle="Mapa Interativo"
                    texto={<>{'Veja sua localização exata'} <br /> {'no mapa em tempo real'} <br /> {'enquanto você caminha.'} </>} />

                <BigButton
                    img={Compass}
                    tittle="Busca Inteligente"
                    texto={<> {'Procure por nome da loja,'} <br /> {'produto ou categoria e'} <br /> {'encontre o que precisa.'} </>} />

                <BigButton
                    img={Compass}
                    tittle="Navegação Guiada"
                    texto={<> {'Trace a melhor rota até'} <br /> {'qualquer loja e receba'} <br /> {'instruções passo a passo.'} </>} />

                <BigButton
                    img={Compass}
                    tittle="Avaliações e Recomendações "
                    texto={<>{'Descubra novas lojas e veja'} <br /> {'o que outros usuários estão'} <br /> {'dizendo.'} </>} />

            </section>
        </main>
    )
}

export default Home