import { motion } from "framer-motion";

import cropImg from "../assets/crop.jpg";
import courseImg from "../assets/course.jpg";
import petImg from "../assets/petshop.jpg";
import salesImg from "../assets/sales.jpg";

function Projects() {
  const projects = [
    {
      title: "Course Recommendation System",
      tech: "Python, Machine Learning",
      description:
        "Recommends courses based on student performance and interests.",
      image: courseImg,
    },
    {
      title: "Smart Agriculture System",
      tech: "AI, Data Science",
      description:
        "Uses weather and crop data to help farming decisions.",
      image: cropImg,
    },
    {
      title: "Pet Shop Management App",
      tech: "Flutter, Spring Boot, MySQL",
      description:
        "Full-stack app for managing inventory, billing and orders.",
      image: petImg,
    },
    {
      title: "Sales Team Management System",
      tech: "React, Spring Boot, MySQL",
      description:
        "System for managing teams, commissions and reports.",
      image: salesImg,
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "120px 10%",
        background: "radial-gradient(circle at top, #111827, #0F172A)",
        color: "white",
      }}
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          fontSize: "2.8rem",
          marginBottom: "60px",
          fontWeight: "700",
          letterSpacing: "1px",
        }}
      >
        🚀 My Projects
      </motion.h2>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "25px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, rotateX: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{
              scale: 1.05,
              rotateX: 8,
              rotateY: -8,
            }}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "18px",
              overflow: "hidden",
              backdropFilter: "blur(12px)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              transformStyle: "preserve-3d",
              cursor: "pointer",
            }}
          >
            {/* IMAGE */}
            <div style={{ overflow: "hidden" }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "cover",
                  transition: "0.4s ease",
                }}
              />
            </div>

            {/* CONTENT */}
            <div style={{ padding: "16px" }}>
              <h3 style={{ marginBottom: "6px", fontSize: "1.1rem" }}>
                {project.title}
              </h3>

              <p
                style={{
                  fontSize: "12px",
                  color: "#60A5FA",
                  marginBottom: "10px",
                }}
              >
                {project.tech}
              </p>

              <p style={{ fontSize: "13px", color: "#CBD5E1" }}>
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;