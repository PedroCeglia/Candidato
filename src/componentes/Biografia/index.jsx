import styles from "./Biografia.module.css";

export default function Biografia() {
  return (
    <section className={styles.Biografia} id="biografia">
      <img
        className={styles.ImagemCandidato}
        src="assets/PrefeitoPoster.png"
        alt="poster prefeito"
      />
      <article className={styles.InformacoesCandidato}>
        <span className={styles.SobrePrefeito}>Sobre o Prefeito</span>
        <p>
          Marcos Madureira é sociólogo, ativista e especialista em políticas
          públicas, formado pela Universidade Federal de Minas Gerais (UFMG) e
          mestre em ciência política pela Universidade de Brasília (UnB).
        </p>
        <p>Pai do Lucas e da Mariana e companheiro da Fernanda.</p>
        <p>
          Milita por justiça social há mais de 15 anos e, em 2022, foi eleito o
          deputado federal mais votado de Minas Gerais, destacando-se por sua
          atuação na defesa dos direitos humanos e da reforma urbana.
        </p>
      </article>
    </section>
  );
}
