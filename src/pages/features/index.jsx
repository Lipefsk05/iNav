// STYLES
import styles from './Features.module.css'

// ICONS
import Compass from '../../assets/img/compass.svg'
import Lupe from '../../assets/img/lupe.svg'
import Path from '../../assets/img/path.svg'
import Star from '../../assets/img/star.svg'

// COMPONENTS
import TitleSection from '../../components/title_section'

function Features() {
    return (    
        <section className={styles.features}>
            <article className={styles.feature1}>

                <TitleSection icon={Compass} title={'Mapa Interativo'}/>
                
                <p>Para fazer o GPS funcionar em ambientes fechados, onde o sinal de 
                satélite não chega, nosso aplicativo utiliza uma tecnologia inteligente. 
                Sensores de baixa energia (conhecidos como beacons) e os sinais de 
                Wi-Fi do local criam uma rede de localização interna. Ao abrir o app, seu 
                celular se comunica com esses pontos e calcula sua posição com uma 
                precisão impressionante, tudo isso otimizado para não gastar a bateria 
                do seu celular."</p>
            </article>

            <article className={styles.feature2}>
                <TitleSection icon={Star} title={'Avaliações e Recomendações'}/>
                <p>Após visitar uma loja, você pode deixar sua avaliação com estrelas (de 1 
                a 5) e escrever um comentário rápido sobre sua experiência. Ao mesmo 
                tempo, pode navegar pelas lojas e ver a nota média e as opiniões de 
                outras pessoas antes mesmo de ir até lá. As lojas com as melhores 
                avaliações ganham destaque no mapa, ajudando toda a comunidade a 
                encontrar o que há de melhor no local</p>
            </article>

            <article className={styles.feature3}>
                <TitleSection icon={Path} title={'Navegação Guiada'}/>
                <p>É tão fácil quanto usar o GPS do seu carro. 1. Escolha seu destino: 
                Busque pela loja ou ponto de interesse no aplicativo. 2. Toque em 'Iniciar 
                Rota': O aplicativo irá calcular instantaneamente o melhor caminho. 3. 
                Siga a linha: Uma linha azul vibrante aparecerá no mapa, guiando seu 
                trajeto em tempo real. Seu ponto de localização se move junto com 
                você, para que saiba sempre se está indo na direção certa.</p>
            </article>

            <article className={styles.feature4}>
                <TitleSection icon={Lupe} title={'Busca Inteligente'}/>
                <p>Nossa barra de busca é o seu ponto de partida. Basta tocar nela e 
                começar a escrever. Enquanto você digita, sugestões de lojas, produtos 
                e categorias aparecerão para facilitar sua vida. Ao encontrar o que 
                    procura, um simples toque revela a localização da loja no mapa e a opção 
                        de traçar uma rota guiada até ela.</p>
            </article>
        </section>
    )
}

export default Features