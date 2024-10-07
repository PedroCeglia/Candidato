import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.Hero}>
      <img className={styles.HeroMobile} src="assets/Hero/Hero_Mobile.png" />
      <img className={styles.HeroTablet} src="assets/Hero/Hero_Tablet.png" />
      <img className={styles.HeroDesktop} src="assets/Hero/Hero_Desktop.png" />
    </section>
  );
}
