// components/PortfolioHero/PortfolioHero.tsx
"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/hero.module.css";

const Hero = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  return (
    <section className={styles.container}>
      {/* Main content */}
      <div className={styles.content}>
        <h1 className={styles.hand}>👋</h1>
        <h1
          className={`${styles.greeting} ${isAnimating ? styles.slideIn : ""}`}
        >
          <span className={styles.codeStyle}>Hello I am Mohab</span>
        </h1>

        <p
          className={`${styles.subtitle} ${
            isAnimating ? styles.typewriter : ""
          }`}
        >
          I am a full stack web developer.
        </p>
      </div>
      <div className={styles.waves}>
        <svg
          className={styles.waveSvg}
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255,255,255,0.05)"
            d="M0,320L60,298.7C120,277,240,235,360,213.3C480,192,600,192,720,186.7C840,181,960,171,1080,165.3C1200,160,1320,160,1380,160L1440,160L1440,400L1380,400C1320,400,1200,400,1080,400C960,400,840,400,720,400C600,400,480,400,360,400C240,400,120,400,60,400L0,400Z"
          />
          <path
            fill="rgba(255,147,0,0.1)"
            d="M0,288L60,266.7C120,245,240,203,360,186.7C480,171,600,181,720,192C840,203,960,213,1080,202.7C1200,192,1320,160,1380,144L1440,128L1440,400L1380,400C1320,400,1200,400,1080,400C960,400,840,400,720,400C600,400,480,400,360,400C240,400,120,400,60,400L0,400Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
