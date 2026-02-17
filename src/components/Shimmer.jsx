import { useState, useEffect } from "react";

const ShimmerCard = ({ delay = 0 }) => {
  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        animationDelay: `${delay}ms`,
      }}
    >
      {/* Image area */}
      <div
        className="shimmer-wave"
        style={{
          height: 160,
          width: "100%",
          background: "#e8e8e8",
          flexShrink: 0,
        }}
      />
      {/* Content */}
      <div style={{ padding: "12px 16px 16px" }}>
        {/* Title */}
        <div
          className="shimmer-wave"
          style={{
            height: 20,
            width: "80%",
            borderRadius: 6,
            background: "#e8e8e8",
            marginBottom: 8,
          }}
        />
        {/* Subtitle */}
        <div
          className="shimmer-wave"
          style={{
            height: 14,
            width: "60%",
            borderRadius: 6,
            background: "#e8e8e8",
            marginBottom: 8,
          }}
        />
        {/* Rating */}
        <div
          className="shimmer-wave"
          style={{
            height: 14,
            width: "40%",
            borderRadius: 6,
            background: "#e8e8e8",
          }}
        />
      </div>
    </div>
  );
};

export const  Shimmer =()=> {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "24px",
      }}
    >
      <style>{`
        @keyframes shimmerWave {
          0% { background-position: -600px 0; }
          100% { background-position: 600px 0; }
        }
        .shimmer-wave {
          background: linear-gradient(
            90deg,
            #e8e8e8 25%,
            #f0f0f0 50%,
            #e8e8e8 75%
          ) !important;
          background-size: 1200px 100% !important;
          animation: shimmerWave 1.6s ease-in-out infinite;
        }
      `}</style>

      {/* Search bar shimmer */}
      <div
        style={{
          display: "flex",
          gap: 12,
          marginBottom: 28,
          alignItems: "center",
        }}
      >
        <div
          className="shimmer-wave"
          style={{
            flex: 1,
            height: 45,
            borderRadius: 10,
            background: "#e8e8e8",
          }}
        />
        <div
          className="shimmer-wave"
          style={{
            width: 120,
            height: 45,
            borderRadius: 10,
            background: "#e8e8e8",
            flexShrink: 0,
          }}
        />
      </div>

      {/* Grid of cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 20,
        }}
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <ShimmerCard key={i} delay={i * 40} />
        ))}
      </div>
    </div>
  );
}