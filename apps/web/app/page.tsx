
export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "60px",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "40px",
        }}
      >
        Ray’sStream
      </h1>

      <video
        controls
        autoPlay
        muted
        playsInline
        width={900}
        style={{
          borderRadius: "16px",
          background: "black",
        }}
      >
        <source src="/videos/itscool.mp4" type="video/mp4" />
      </video>
    </main>
  );
} 
