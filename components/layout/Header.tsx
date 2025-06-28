"use client";
import styles from "@/styles/header.module.css";
import { useEffect, useState } from "react";
import NavBar from "../ui/NavBar";
import Link from "next/link";
function Header() {
  const [isResponsive, setIsResponsive] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setIsResponsive(false);
      } else {
        setIsResponsive(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className={styles.header}>
      {/* Title */}
      <Link href="/" className={styles.title}>
        Mohab
      </Link>
      {/* Nav Bar */}
      <NavBar />
      {/* Email Us */}
      {isResponsive ? (
        ""
      ) : (
        <a href="mailto:mohabibrahim181@gmail.com" className={styles.emailMe}>
          Email us
        </a>
      )}
    </div>
  );
}

export default Header;
