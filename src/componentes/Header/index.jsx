import styles from "./Header.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleMenuMobile = () => {
    setMenuIsOpen((x) => !x);
  };
  const menuMobileClass = menuIsOpen
    ? styles.MenuMobileActive
    : styles.MenuMobileOff;

  const urlButtonToOpen =
    "https://cdn-icons-png.flaticon.com/512/11410/11410799.png";
  const urlButtonToClose =
    "https://cdn-icons-png.flaticon.com/512/8162/8162872.png";

  const menuButtonImage = menuIsOpen ? urlButtonToClose : urlButtonToOpen;
  return (
    <header>
      <nav className={styles.Toolbar}>
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
      <section className={styles.HeaderMain}>
        <h1>
          <Link to="/">
            <img className={styles.Logo} src="assets/logo_oficial.png" />
          </Link>
        </h1>
        <button onClick={handleMenuMobile}>
          <img src={menuButtonImage} alt="Menu" />
        </button>
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="#biografia">Biografia</a>
            </li>
            <li>
              <a href="#propostas">Propóstas</a>
            </li>
            <li>
              <a href="#agenda">Agenda</a>
            </li>
          </ul>
        </nav>
      </section>
      <nav className={menuMobileClass}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li onClick={handleMenuMobile}>
            <a href="#biografia">Biografia</a>
          </li>
          <li onClick={handleMenuMobile}>
            <a href="#propostas">Propóstas</a>
          </li>
          <li onClick={handleMenuMobile}>
            <a href="#agenda">Agenda</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
