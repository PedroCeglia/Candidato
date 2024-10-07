import styles from "./CardPropostas.module.css";

export default function CardPropostas({ srcImage, title, text }) {
  return (
    <article className={styles.Container}>
      <img className={styles.Image} src={srcImage} alt="Proposta" />
      <div className={styles.ContainerText}>
        <h3>{title}</h3>
        <p>{text}</p>

        <a>Ler Mais</a>
      </div>
    </article>
  );
}
