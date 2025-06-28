"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/projects.module.css";
import GithubLogo from "@/public/github.png";
import axios from "axios";
import { Project } from "@/types/app";

const Projects = () => {
  const [projects, SetProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const fetchedProjects = await axios.get("/api/projects");
      SetProjects(fetchedProjects?.data?.projects);
    }
    fetchProjects();
  }, []);
  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.title}>
        <span className={styles.angle}>&lt;</span>Projects
        <span className={styles.angle}>/&gt;</span>
      </h2>
      <div className={styles.container}>
        <div className={styles.projects}>
          {projects.map((project) => (
            <div key={project?.title} className={styles.project}>
              <a
                target="_blank"
                style={{ width: "100%" }}
                href={project?.liveUrl}
              >
                <Image
                  width={200}
                  height={150}
                  src={project?.imageUrl}
                  alt={project?.title}
                  className={styles.projectImage}
                />
              </a>
              <hr
                style={{
                  border: "solid 1px var(--foreground)",
                  width: "100%",
                  margin: "2px",
                }}
              />
              <span className={styles.projectName}>{project?.title}</span>
              <span className={styles.desc}>
                Description:{" "}
                <span style={{ fontWeight: 400 }}> {project?.description}</span>
              </span>
              <span className={styles.techs}>
                Technologies:{" "}
                <span style={{ fontWeight: 400 }}>
                  {project.technologies.toString().replace(",", ", ")}
                </span>
              </span>
              <span className={styles.gLink}>
                <Image
                  width={20}
                  height={20}
                  quality={100}
                  src={GithubLogo}
                  alt="Github_Logo"
                />
                Source code:{" "}
                <a
                  target="_blank"
                  className={styles.githubLink}
                  href={project?.githubUrl}
                >
                  {project?.githubUrl}
                </a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
