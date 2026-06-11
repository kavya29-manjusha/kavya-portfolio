import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const items = [
    "about",
    "skills",
    "experience",
    "education",
    "certificates",
    "achievements",
    "projects",
    "contact",
  ];

  return (
    <nav style={navStyle}>
      {/* LOGO (LEFT) */}
      <div style={logoStyle}>
        Protfolio<span style={{ color: "#fff" }}></span>
      </div>

      {/* LINKS (ALWAYS LEFT FLOW) */}
      <div style={linksWrapper}>
        {items.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            style={{
              ...linkStyle,
              color: active === item ? "#60A5FA" : "#CBD5E1",
              background:
                active === item
                  ? "rgba(79,70,229,0.15)"
                  : "transparent",
            }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}

/* 🔥 LEFT ALIGNED NAVBAR */
const navStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  height: "70px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start", // IMPORTANT FIX
  padding: "0 40px",
  gap: "50px",
  background: "rgba(7, 11, 26, 0.75)",
  backdropFilter: "blur(14px)",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  zIndex: 1000,
};

const logoStyle = {
  fontSize: "20px",
  fontWeight: "800",
  color: "#60A5FA",
  letterSpacing: "1px",
};

const linksWrapper = {
  display: "flex",
  gap: "20px",
  alignItems: "center",
};

const linkStyle = {
  padding: "8px 14px",
  borderRadius: "999px",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "500",
  transition: "all 0.3s ease",
};

export default Navbar;