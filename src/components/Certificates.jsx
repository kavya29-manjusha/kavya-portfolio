import { motion } from "framer-motion";

function Certificates() {
  const certificates = [
    {
      title: "Cisco CCNA - Introduction to Networks",
      issuer: "Cisco Networking Academy",
    },
    {
      title: "Data Science Course",
      issuer: "Udemy",
    },
    {
      title: "Infosys Springboard Certification",
      issuer: "Infosys Springboard",
    },
    {
      title: "Best Intern of the Month",
      issuer: "ACC EdTech",
    },
  ];

  return (
    <section
      id="certificates"
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
          marginBottom: "40px",
          textAlign: "center",
          fontSize: "2.5rem",
        }}
      >
        Certificates
      </motion.h1>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
        }}
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(79,70,229,0.4)",
            }}
            style={{
              background: "#1E293B",
              padding: "25px",
              borderRadius: "15px",
              cursor: "pointer",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {/* TITLE */}
            <h3 style={{ marginBottom: "10px", color: "#F8FAFC" }}>
              {cert.title}
            </h3>

            {/* ISSUER BADGE */}
            <span
              style={{
                display: "inline-block",
                marginTop: "10px",
                fontSize: "12px",
                padding: "5px 10px",
                borderRadius: "20px",
                background: "#0F172A",
                color: "#60A5FA",
                border: "1px solid rgba(96,165,250,0.3)",
              }}
            >
              {cert.issuer}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;