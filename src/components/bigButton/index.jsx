import styles from "./BigButton.module.css"

function BigButton({ img, tittle, texto }) {
    return (
        <div className={styles.button}>
            <div className={styles.tittle}>
                <img src={img} alt="imagem do botão" />
                <h2>{tittle}</h2>
            </div>
            <h2>{texto}</h2>
        </div>
    );
}

export default BigButton;
