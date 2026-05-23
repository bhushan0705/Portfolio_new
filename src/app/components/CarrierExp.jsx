"use client";



export default function CarrieExp() {
    const experieces = [
  {
    year: "2026",
    role: "MERN Stack Developer",
    type: "Freelance & Projects",
    desc: "Developing e-commerce websites, 3d websites and chatbots.",
  },
  {
    year: "2025",
    role: "Full-Stack Developer",
    type: "Freelance & Projects",
    desc: "Built complete web applications from frontend to backend. Developed responsive UIs, RESTful APIs, and database solutions for various clients and projects.",
  },
  {
    year: "2024",
    role: "Web Developer",
    type: "Self-Taught & Projects",
    desc: "Dove deep into web development, building automation scripts, bots, and mastering the fundamentals of software development and problem-solving.",
  },
  {
    year: "2023",
    role: "Graphic Designer",
    type: "Self-Taught & Projects",
    desc: "Started my creative journey as a graphic designer, creating logos, banners, and visual content. This sparked my passion for technology and digital creation.",
  },
];
  return (
    <section
      id="experience"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "80px 80px",
        minHeight: "80vh",
      }}
    >
      <div className="section-divider" style={{ marginBottom: "60px" }} />

      {experieces.map((exp, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "220px 60px 1fr",
            gap: "0",
            marginBottom: "0",
            position: "relative",
          }}
        >
          {/* Left: Role + type */}
          <div style={{ padding: "32px 0" }}>
            <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
              {exp.role}
            </h3>
            <p style={{ fontSize: "13px", color: "#7c6fcd", fontWeight: 500 }}>{exp.type}</p>
          </div>

          {/* Center: Timeline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                width: "1px",
                background: i === 0
                  ? "linear-gradient(to bottom, transparent, rgba(124,111,205,0.6))"
                  : i === experieces.length - 1
                  ? "linear-gradient(to bottom, rgba(124,111,205,0.6), transparent)"
                  : "rgba(124,111,205,0.4)",
                left: "50%",
              }}
            />
            {/* Dot */}
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: i === 1 ? "#7c6fcd" : "rgba(124,111,205,0.4)",
                border: "2px solid rgba(124,111,205,0.8)",
                position: "relative",
                zIndex: 2,
                marginTop: "40px",
                boxShadow: i === 1 ? "0 0 12px rgba(124,111,205,0.8)" : "none",
              }}
            />
          </div>

          {/* Right: Year + description */}
          <div style={{ padding: "24px 0 24px 24px" }}>
            <div
              style={{
                fontSize: "clamp(40px, 5vw, 70px)",
                fontWeight: 900,
                color: "rgba(255,255,255,0.15)",
                lineHeight: 1,
                marginBottom: "12px",
                fontFamily: "'Space Mono', monospace",
              }}
            >
              {exp.year}
            </div>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: "580px" }}>
              {exp.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
