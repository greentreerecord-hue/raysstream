export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video
        src="/videos/itscool.mp4"
        controls
        autoPlay
        loop
        muted
        style={{
          width: "90%",
          maxWidth: "900px",
          borderRadius: "12px",
        }}
      />
    </main>
  );
}
