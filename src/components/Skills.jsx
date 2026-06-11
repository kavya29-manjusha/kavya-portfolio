import { motion } from "framer-motion";

function Skills() {
  const skills = [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "MySQL",
    "MongoDB",
    "Git & GitHub",
    "React (Basic)",
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "120px 10%",
        background: "#070B1A",
        color: "white",
      }}
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "2.8rem",
          marginBottom: "50px",
          textAlign: "center",
          fontWeight: "700",
          letterSpacing: "-0.5px",
        }}
      >
        My Skills
      </motion.h2>

      {/* GRID */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "18px",
          justifyContent: "center",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: i * 0.05,
            }}
            whileHover={{
              scale: 1.08,
              backgroundColor: "rgba(79,70,229,0.15)",
              boxShadow: "0 0 25px rgba(79,70,229,0.3)",
              borderColor: "rgba(79,70,229,0.5)",
            }}
            style={{
              background: "rgba(30,41,59,0.6)",
              padding: "14px 20px",
              borderRadius: "14px",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "default",
              border: "1px solid rgba(255,255,255,0.06)",
              backdropFilter: "blur(10px)",
              transition: "all 0.3s ease",
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;