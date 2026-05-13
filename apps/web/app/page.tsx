export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <h1>Ray'sStream</h1>

      <video
        src="/videos/test.mp4"
        controls
        autoPlay
        loop
        style={{
          width: "80%",
          maxWidth: "900px",
          borderRadius: "12px",
        }}
      />

      <button
        style={{
          padding: "12px 24px",
          fontSize: "18px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Subscribe
      </button>
    </main>
  );
} 
