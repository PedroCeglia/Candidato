import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <img className={styles.Image} src="assets/logo.png" alt={"logo"} />
      <nav>
        <ul>
          <li>
            <a href="https://www.x.com" target={"_blank"}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/5969/5969020.png"
                alt="X Icon"
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target={"_blank"}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                alt="Instagram Icon"
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target={"_blank"}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook Icon"
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com" target={"_blank"}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                alt="Youtube Icon"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
