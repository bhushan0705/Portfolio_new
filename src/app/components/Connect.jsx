"use client";

export default function Connect() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor:"black",
        position: "relative",
        zIndex: 1,
        padding: "80px 80px 120px",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="section-divider" style={{ marginBottom: "80px" }} />

      {/* Tagline */}
      <p
        style={{
          fontSize: "14px",
          color: "rgba(255,255,255,0.35)",
          letterSpacing: "3px",
          textTransform: "uppercase",
          marginBottom: "24px",
        }}
      >
        Let's connect
      </p>

      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 52px)",
          fontWeight: 800,
          color: "#fff",
          textAlign: "center",
          marginBottom: "16px",
          letterSpacing: "1px",
        }}
      >
        Ready to build something amazing?
      </h2>

      <p
        style={{
          fontSize: "15px",
          color: "rgba(255,255,255,0.4)",
          maxWidth: "480px",
          textAlign: "center",
          lineHeight: 1.7,
          marginBottom: "56px",
        }}
      >
        Whether you need an AI solution, a full-stack app, or just want to explore what's possible — I'm here.
      </p>

      {/* CTA Buttons — matching the video exactly */}
      <div style={{ display: "flex", gap: "16px", marginBottom: "80px" }}>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "16px 36px",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: "50px",
            color: "rgba(255,255,255,0.85)",
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.5px",
            textDecoration: "none",
            background: "rgba(255,255,255,0.04)",
            transition: "all 0.25s",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.1)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
          }}
        >
          Play With Me ⇒
        </a>

        <a
          href="mailto:redoyanul1234@gmail.com"
          style={{
            padding: "16px 36px",
            borderRadius: "50px",
            color: "rgba(255,255,255,0.9)",
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.5px",
            textDecoration: "none",
            background: "rgba(124,111,205,0.2)",
            border: "1px solid rgba(124,111,205,0.5)",
            transition: "all 0.25s",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(124,111,205,0.4)";
            e.currentTarget.style.borderColor = "rgba(124,111,205,0.8)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(124,111,205,0.2)";
            e.currentTarget.style.borderColor = "rgba(124,111,205,0.5)";
          }}
        >
          Hire Me →
        </a>
      </div>

      {/* Big name footer — matching the video */}
      <div
        style={{
       
          fontSize: "clamp(40px, 8vw, 110px)",
          fontWeight: 900,
          color: "rgba(255,255,255,0.07)",
          letterSpacing: "4px",
          textTransform: "uppercase",
          userSelect: "none",
          pointerEvents: "none",
          textAlign: "center",
          lineHeight: 1,
        }}
      >
        BHUSHAN DANDAVATE
      </div>
    </section>
  );
}
