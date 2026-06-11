import { motion } from "framer-motion";

function Education() {
  return (
    <section
      id="education"
      style={{
        padding: "100px 10%",
        background: "#0F172A",
        color: "white",
      }}
    >
      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{
          fontSize: "2.5rem",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        Education
      </motion.h1>

      {/* TIMELINE WRAPPER */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 25px rgba(79,70,229,0.4)",
          }}
          style={{
            background: "#1E293B",
            padding: "30px",
            borderRadius: "15px",
            maxWidth: "700px",
            width: "100%",
            position: "relative",
            borderLeft: "4px solid #4F46E5",
          }}
        >
          {/* DOT (timeline style) */}
          <div
            style={{
              position: "absolute",
              left: "-10px",
              top: "30px",
              width: "14px",
              height: "14px",
              background: "#4F46E5",
              borderRadius: "50%",
            }}
          />

          {/* CONTENT */}
          <h2 style={{ marginBottom: "10px" }}>
            🎓 B.Tech - Computer Science and Information Technology
          </h2>

          <p style={{ color: "#CBD5E1", marginBottom: "10px" }}>
            Malla Reddy College of Engineering and Technology
          </p>

          <span
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "6px 12px",
              borderRadius: "20px",
              background: "#0F172A",
              color: "#60A5FA",
              border: "1px solid rgba(96,165,250,0.3)",
              fontSize: "13px",
            }}
          >
            CGPA: 8.38
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;