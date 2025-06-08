import styles from "./BigButton.module.css"

function BigButton({ img, tittle, texto }) {
  return (
    <div className={styles.button}>
      <img src={img} alt="imagem do botão" />
      <h2>{tittle}</h2>
      <h2>{texto}</h2>
    </div>
  );
}

export default BigButton;
