interface IdentityCardProps {
  email: string;
}

export function IdentityCard({ email }: IdentityCardProps) {
  return (
    <div
      style={{
        background: "#1e1a14",
        borderRadius: 24,
        padding: "2.5rem",
        color: "#faf6f0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: -50,
          right: -50,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "rgba(139,0,0,0.12)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -30,
          left: -30,
          width: 130,
          height: 130,
          borderRadius: "50%",
          background: "rgba(139,0,0,0.07)",
        }}
      />

      {/* Monogram */}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: "rgba(139,0,0,0.85)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.5rem",
          position: "relative",
        }}
      >
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#faf6f0",
          }}
        >
          MB
        </span>
      </div>

      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.5rem",
          fontWeight: 700,
          marginBottom: "0.25rem",
          position: "relative",
        }}
      >
        Martin Braquet
      </h3>
      <p
        style={{
          fontSize: "0.8rem",
          color: "rgba(250,246,240,0.45)",
          marginBottom: "2rem",
          position: "relative",
        }}
      >
        Researcher · Engineer
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.9rem",
          position: "relative",
        }}
      >
        {[
          ["📍", "Belgium (current)"],
          ["🎓", "MSc · UT Austin & UCLouvain"],
          ["✉️", email],
        ].map(([icon, text]) => (
          <div
            key={text}
            style={{
              display: "flex",
              gap: "0.75rem",
              alignItems: "flex-start",
              fontSize: "0.85rem",
              color: "rgba(250,246,240,0.65)",
            }}
          >
            <span style={{ flexShrink: 0 }}>{icon}</span>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
