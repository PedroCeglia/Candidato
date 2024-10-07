import styles from "./ItemProposta.module.css";

export default function ItemProposta({ index, title }) {
  return (
    <article className={styles.ItemProposta}>
      <h4>
        <span>{index} - </span>
        {title}
      </h4>
    </article>
  );
}
