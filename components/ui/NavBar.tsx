"use client";
import styles from "@/styles/header.module.css";
import { useState, useEffect } from "react";

function NavBar() {
  const [isResponsive, setIsResponsive] = useState(true);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setIsResponsive(false);
      } else {
        setIsResponsive(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [active, setActive] = useState<string>("");
  const sections = [
    { title: "Stack", link: "#stack" },
    { title: "Projects", link: "#projects" },
    { title: "About", link: "#about" },
    { title: "Contact", link: "#contact" },
  ];
  return isResponsive ? (
    <div className={styles.hamburger}>
      <button
        className={styles.menuButton}
        aria-label="Open navigation menu"
        onClick={() => setVisible(true)}
      >
        Menu
      </button>

      <ul
        className={`${styles.responsiveMenu} ${
          visible ? styles.visible : styles.hidden
        }`}
      >
        <button
          className={styles.closeButton}
          aria-label="Close menu"
          onClick={() => setVisible(false)}
        >
          ✕
        </button>
        <hr className={styles.divider} />

        {sections.map((item) => (
          <a
            href={item.link}
            key={item.title}
            className={
              active === item.title ? styles.menuActive : styles.menuNav
            }
            onClick={() => {
              setActive(item.title);
              setVisible(false);
            }}
          >
            <li>{item.title}</li>
          </a>
        ))}
      </ul>
    </div>
  ) : (
    <div className={styles.navbar}>
      <ul>
        {sections.map((item) => (
          <a
            href={item.link}
            key={item.title}
            className={
              active === item.title ? `${styles.active}` : `${styles.nav}`
            }
            onClick={() => setActive(item.title)}
          >
            <li>{item.title}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
