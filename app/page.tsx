export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white",
        padding: "24px",
      }}
    >
      <h1>Ray&apos;sStream</h1>

      <video
        src="/videos/itscool.mp4"
        controls
        autoPlay
        muted
        loop
        style={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "12px",
          marginTop: "20px",
        }}
      />
    </main>
  );
}
