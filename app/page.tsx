export default function Home() {
  return (
    <main style={{
      backgroundColor: "#0f0f0f",
      color: "white",
      minHeight: "100vh",
      padding: "20px",
      fontFamily: "Arial"
    }}>
     
      {/* Header */}
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        🎬 Ray’sStream
      </h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search videos..."
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "none",
          marginBottom: "30px"
        }}
      />

      {/* Video Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px"
      }}>
       
        {/* Video Card */}
        <div style={{ background: "#1c1c1c", padding: "10px", borderRadius: "10px" }}>
          <div style={{ height: "120px", background: "#333", borderRadius: "8px" }}></div>
          <h3>First Video</h3>
          <p style={{ color: "gray" }}>Ray Channel</p>
        </div>

        <div style={{ background: "#1c1c1c", padding: "10px", borderRadius: "10px" }}>
          <div style={{ height: "120px", background: "#333", borderRadius: "8px" }}></div>
          <h3>Second Video</h3>
          <p style={{ color: "gray" }}>Creator</p>
        </div>

      </div>

    </main>
  );
} 
 