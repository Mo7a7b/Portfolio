import React from "react";
import styles from "@/styles/about.module.css";
function About() {
  return (
    <section id="about" className={styles.section}>
      <h2 className={styles.title}>
        <span className={styles.angle}>&lt;</span>About Me
        <span className={styles.angle}>/&gt;</span>
      </h2>
      <div className={styles.container}>
        <p className={styles.typography}>
          My name is Mohab Ibrahim, and I am a dedicated Full Stack Web
          Developer with extensive experience in modern web technologies. I
          specialize in building robust and scalable applications using
          frameworks such as React, Next.js, Node.js, and NestJS. My passion for
          technology drives me to continuously learn and adapt to the latest
          industry trends, ensuring that I deliver high-quality solutions
          tailored to meet diverse client needs. I am committed to excellence,
          innovation, and effective collaboration in every project I undertake.
        </p>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            marginTop: "1.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "rgba(99,102,241,0.08)",
              borderRadius: "1rem",
              padding: "1.5rem",
              minWidth: "180px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(99,102,241,0.08)",
            }}
          >
            <span style={{ fontSize: "2.2rem", display: "block" }}>🚀</span>
            <strong style={{ fontSize: "1.1rem" }}>Innovation</strong>
            <p style={{ fontSize: "0.95rem", color: "#6b7280" }}>
              Always pushing boundaries and exploring new horizons.
            </p>
          </div>
          <div
            style={{
              background: "rgba(236,72,153,0.08)",
              borderRadius: "1rem",
              padding: "1.5rem",
              minWidth: "180px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(236,72,153,0.08)",
            }}
          >
            <span style={{ fontSize: "2.2rem", display: "block" }}>🎨</span>
            <strong style={{ fontSize: "1.1rem" }}>Creativity</strong>
            <p style={{ fontSize: "0.95rem", color: "#6b7280" }}>
              Designing with passion and a flair for the extraordinary.
            </p>
          </div>
          <div
            style={{
              background: "rgba(16,185,129,0.08)",
              borderRadius: "1rem",
              padding: "1.5rem",
              minWidth: "180px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(16,185,129,0.08)",
            }}
          >
            <span style={{ fontSize: "2.2rem", display: "block" }}>🤝</span>
            <strong style={{ fontSize: "1.1rem" }}>Collaboration</strong>
            <p style={{ fontSize: "0.95rem", color: "#6b7280" }}>
              Working together to achieve remarkable results.
            </p>
          </div>
        </div>
        <span
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "180px",
            height: "180px",
            background:
              "radial-gradient(circle, var(--foreground) 0%, transparent 70%)",
            opacity: 0.18,
            zIndex: 0,
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <span
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "180px",
            height: "180px",
            background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
            opacity: 0.18,
            zIndex: 0,
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
      </div>
    </section>
  );
}

export default About;
