import styles from "./BigButton.module.css"

function BigButton({ img, tittle, texto }) {
    return (
        <article className={styles.button}>
            <div className={styles.title}>
                <img src={img} alt="imagem do botão" />
                <h2>{tittle}</h2>
            </div>
            <p>{texto}</p>
        </article>
    );
}

export default BigButton;
