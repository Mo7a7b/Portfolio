"use client";
import React from "react";
import GithubLogo from "@/public/github.png";
import LinkedinLogo from "@/public/linkedin.png";
import EmailLogo from "@/public/email.png";
import Image from "next/image";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#dbdbdb",
        color: "var(--text)",
        padding: "3rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      {/* GLASSY CARD */}
      <div
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 165, 0, 0.05)", // light orange tint (foreground)
          padding: "2rem 3rem",
          borderRadius: "1.5rem",
          border: "1px solid rgba(255, 165, 0, 0.3)",
          textAlign: "center",
          maxWidth: "600px",
          zIndex: 2,
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            color: "var(--foreground)",
          }}
        >
          &lt; Made with⚡by Mohab /&gt;
        </h2>
        <p style={{ fontSize: "1rem", opacity: 0.8 }}>
          © {new Date().getFullYear()} Mohab Ibrahim. All rights reserved.
        </p>
      </div>

      {/* SOCIAL ICONS */}
      <div style={{ display: "flex", gap: "1.2rem", marginTop: "1rem" }}>
        {[
          { icon: GithubLogo, href: "https://github.com/Mo7a7b" },
          { icon: EmailLogo, href: "mailto:mohabibrahim181@gmail.com" },
          {
            icon: LinkedinLogo,
            href: "https://www.linkedin.com/in/mohab-ibrahim-025a002a5/",
          },
        ].map(({ icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "1.5rem",
              textDecoration: "none",
              color: "#2563eb",
              background: "#e0f2fe",
              padding: "0.5rem",
              borderRadius: "50%",
              colorScheme: "light",
              zIndex: 1,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              width: "40px",
              height: "40px",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.2)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Image src={icon} alt="Logo" width={25} height={25} />
          </a>
        ))}
      </div>

      {/* CURVY ORANGE WAVE BACKGROUND SVG */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          style={{ width: "100%", height: "100px" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="var(--foreground)"
            fillOpacity="0.1"
            d="M0,96L60,128C120,160,240,224,360,240C480,256,600,224,720,213.3C840,203,960,213,1080,202.7C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </footer>
  );
}

export default Footer;
