"use client";
import React from "react";
import Image from "next/image";
import styles from "@/styles/techStack.module.css";

const technologies = [
  { name: "HTML", logo: "/logos/html.png" },
  { name: "CSS", logo: "/logos/css.png" },
  { name: "Sass", logo: "/logos/sass.png" },
  { name: "JavaScript", logo: "/logos/javascript.png" },
  { name: "TypeScript", logo: "/logos/typescript.png" },
  { name: "React", logo: "/logos/react.png" },
  { name: "Next.js", logo: "/logos/nextjs.png" },
  { name: "Node.js", logo: "/logos/nodejs.png" },
  { name: "NestJS", logo: "/logos/nestjs.png" },
  { name: "Python", logo: "/logos/python.png" },
];

export default function TechStack() {
  return (
    <section id="stack" className={styles.techStackSection}>
      <h2 className={styles.title}>
        <span className={styles.angle}>&lt;</span>Tech Stack
        <span className={styles.angle}>/&gt;</span>
      </h2>
      <div className={styles.gridContainer}>
        {technologies.map((tech) => (
          <div key={tech.name} className={styles.card}>
            <div className={styles.cardInner}>
              <Image
                src={tech.logo}
                alt={tech.name}
                width={50}
                height={50}
                className={styles.logo}
              />
              <span className={styles.techName}>{tech.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
