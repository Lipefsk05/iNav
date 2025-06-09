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
                    <p>Navegue com precisão com localização em <br />
                        tempo real e mapas interativos.</p>
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

            <section className={styles.user_flow}>
                <article>
                    <img src={Mobile1} alt="" />
                    <div>
                        <p>Abra o App <br />
                        aplicativo assim <br />
                        que entrar no local.</p>
                        
                        <span>1</span>
                    </div>
                </article>

                <article>
                    <div>
                        <span>2</span>
                    
                        <p>Pesquise o local onde <br />
                        você se encontra como <br />
                        um mercado ou shopping</p>
                    </div>
                    <img src={Mobile2} alt="" />
                </article>
                
                <article>
                    <img src={Mobile3} alt="" />
                    <div>
                        <p>Pesquise seu Destino <br />
                        digitando o nome da <br />
                        loja ou o que procura.</p>
                        
                        <span>3</span>
                    </div>
                </article>
                
                <article>
                    <div>
                        <span>4</span>
                        
                        <p>Siga a rota e deixe <br />
                        nosso guia levar <br />
                        você até lá.</p>
                    </div>
                    <img src={Mobile4} alt="" />
                </article>

            </section>
        </main>
    )
}

export default Home