"use client";
import React from "react";
import Image from "next/image";
import GithubLogo from "@/public/github.png";
import LinkedinLogo from "@/public/linkedin.png";
import EmailLogo from "@/public/email.png";
import { getContactFormData } from "@/actions/contactAction";
function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--background)",
        padding: "2rem 0",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 2,
          background: "rgba(255,255,255,0.85)",
          borderRadius: "2rem",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
          padding: "3rem 2.5rem",
          maxWidth: 400,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backdropFilter: "blur(6px)",
        }}
      >
        <h2
          style={{
            fontSize: "2.2rem",
            fontWeight: 700,
            marginBottom: "0.5rem",
            letterSpacing: "0.02em",
            color: "var(--foreground)",
            textAlign: "center",
          }}
        >
          <span role="img" aria-label="sparkle">
            💫
          </span>{" "}
          Let&#39;s Connect!
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#374151",
            marginBottom: "2rem",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          Have a project, idea, or just want to say hi? <br />
          <span
            style={{
              display: "inline-block",
              animation: "wave 1.5s infinite",
              transformOrigin: "70% 70%",
            }}
            role="img"
            aria-label="wave"
          >
            👋
          </span>
          Drop me a message below!
        </p>
        <form
          autoComplete="off"
          action={getContactFormData}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            style={{
              padding: "0.8rem 1rem",
              borderRadius: "1rem",
              border: "1px solid #d1d5db",
              fontSize: "1rem",
              outline: "none",
              transition: "border 0.2s",
              marginBottom: 0,
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            style={{
              padding: "0.8rem 1rem",
              borderRadius: "1rem",
              border: "1px solid #d1d5db",
              fontSize: "1rem",
              outline: "none",
              transition: "border 0.2s",
              marginBottom: 0,
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            style={{
              padding: "0.8rem 1rem",
              borderRadius: "1rem",
              border: "1px solid #d1d5db",
              fontSize: "1rem",
              outline: "none",
              resize: "vertical",
              transition: "border 0.2s",
              marginBottom: 0,
            }}
          />
          <button
            type="submit"
            style={{
              background: "linear-gradient(90deg, #6EE7B7 0%, #3B82F6 100%)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.1rem",
              border: "none",
              borderRadius: "1rem",
              padding: "0.9rem 0",
              cursor: "pointer",
              boxShadow: "0 4px 14px 0 rgba(59,130,246,0.15)",
              transition: "background 0.2s, transform 0.1s",
              marginTop: "0.5rem",
            }}
          >
            <span role="img" aria-label="rocket">
              🚀
            </span>{" "}
            Send Message
          </button>
        </form>
        <div
          style={{
            display: "flex",
            gap: "1.2rem",
            justifyContent: "center",
            marginTop: "0.5rem",
          }}
        >
          <a
            href="mailto:mohabibrahim181@email.com"
            title="Email"
            style={{
              fontSize: "1.7rem",
              color: "#2563eb",
              background: "#e0f2fe",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              padding: "0.5rem",
              transition: "background 0.2s, transform 0.2s",
              textDecoration: "none",
              boxShadow: "0 2px 8px 0 rgba(59,130,246,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image width={25} height={25} src={EmailLogo} alt="Email" />
          </a>
          <a
            href="https://github.com/Mo7a7b"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "1.7rem",
              color: "#2563eb",
              background: "#e0f2fe",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              padding: "0.5rem",
              transition: "background 0.2s, transform 0.2s",
              textDecoration: "none",
              boxShadow: "0 2px 8px 0 rgba(59,130,246,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image width={25} height={25} src={GithubLogo} alt="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohab-ibrahim-025a002a5/"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "1.7rem",
              color: "#2563eb",
              background: "#e0f2fe",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              padding: "0.5rem",
              transition: "background 0.2s, transform 0.2s",
              textDecoration: "none",
              boxShadow: "0 2px 8px 0 rgba(59,130,246,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image width={25} height={25} src={LinkedinLogo} alt="Linkedin" />
          </a>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 600 600"
          style={{
            position: "absolute",
            top: "-10%",
            left: "-10%",
            width: "120%",
            height: "120%",
            opacity: 0.35,
          }}
        >
          <defs>
            <linearGradient
              id="blobGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#6EE7B7" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          <path fill="url(#blobGradient)">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                            M421,321Q406,392,337,417Q268,442,206,410Q144,378,133,309Q122,240,175,192Q228,144,299,137Q370,130,414,190Q458,250,421,321Z;
                            M430,320Q410,390,340,420Q270,450,200,410Q130,370,140,300Q150,230,200,180Q250,130,320,140Q390,150,430,210Q470,270,430,320Z;
                            M421,321Q406,392,337,417Q268,442,206,410Q144,378,133,309Q122,240,175,192Q228,144,299,137Q370,130,414,190Q458,250,421,321Z
                        "
            />
          </path>
        </svg>
      </div>
      <style>
        {`
                @keyframes wave {
                    0% { transform: rotate(0deg);}
                    10% { transform: rotate(14deg);}
                    20% { transform: rotate(-8deg);}
                    30% { transform: rotate(14deg);}
                    40% { transform: rotate(-4deg);}
                    50% { transform: rotate(10deg);}
                    60% { transform: rotate(0deg);}
                    100% { transform: rotate(0deg);}
                }
                @media (max-width: 600px) {
                    section {
                        padding: 1rem 0 !important;
                    }
                    div[style*="max-width: 400px"] {
                        padding: 2rem 1rem !important;
                        max-width: 98vw !important;
                    }
                }
            `}
      </style>
    </section>
  );
}

export default Contact;
