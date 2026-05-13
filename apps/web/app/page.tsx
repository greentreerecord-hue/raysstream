export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Ray’sStream</h1>

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
          marginTop: "20px",
          padding: "12px 24px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Subscribe
      </button>
    </main>
  );
}
