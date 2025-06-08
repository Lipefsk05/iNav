import styles from "./LittleButton.module.css"

function LittleButton({ img, texto }) {
  return (
    <div className={styles.button}>
      <img src={img} alt="imagem do botão" />
      <h2>{texto}</h2>
    </div>
  );
}

export default LittleButton;
