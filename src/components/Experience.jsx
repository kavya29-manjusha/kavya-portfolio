import { motion } from "framer-motion";

function Experience() {
  const experience = [
    {
      role: "AI/ML Intern",
      company: "ACC EdTech",
      desc: "Worked on Machine Learning, Data Preprocessing, Model Building and AI-based projects.",
    },
    {
      role: "Python Development Intern",
      company: "DevElet Technologies",
      desc: "Developed Python applications and worked on backend logic and debugging.",
    },
  ];

  return (
    <section
      id="experience"
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
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "50px",
        }}
      >
        Experience
      </motion.h2>

      {/* TIMELINE */}
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          borderLeft: "2px solid rgba(79,70,229,0.5)",
          paddingLeft: "20px",
        }}
      >
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="card"
            style={{
              marginBottom: "20px",
              position: "relative",
            }}
          >
            {/* DOT */}
            <div
              style={{
                width: "10px",
                height: "10px",
                background: "#4F46E5",
                borderRadius: "50%",
                position: "absolute",
                left: "-27px",
                top: "20px",
              }}
            />

            <h3 style={{ marginBottom: "5px" }}>{exp.role}</h3>

            <p
              style={{
                color: "#60A5FA",
                fontSize: "14px",
                marginBottom: "10px",
              }}
            >
              {exp.company}
            </p>

            <p style={{ color: "#CBD5E1", fontSize: "14px" }}>
              {exp.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;