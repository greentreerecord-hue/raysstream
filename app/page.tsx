export default function Home() {
  const videos = [
    { title: "First Video", views: "1M views" },
    { title: "Second Video", views: "500K views" },
    { title: "Third Video", views: "250K views" },
  ];

  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#000",
      color: "#fff",
      padding: "24px",
      fontFamily: "Arial"
    }}>
     
      {/* Header */}
      <h1 style={{ fontSize: "28px", marginBottom: "8px" }}>
        🔥 Ray’sStream
      </h1>

      <p style={{ color: "#aaa", marginBottom: "24px" }}>
        The future of video streaming starts here.
      </p>

      {/* Search */}
      <input
        type="text"
        placeholder="Search videos..."
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #333",
          background: "#111",
          color: "#fff",
          marginBottom: "32px"
        }}
      />

      {/* Trending */}
      <h2 style={{ marginBottom: "16px" }}>🔥 Trending</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {videos.map((video, i) => (
          <div key={i} style={{
            background: "#111",
            borderRadius: "12px",
            overflow: "hidden",
            cursor: "pointer"
          }}>
           
            <div style={{
              height: "150px",
              background: "#333"
            }} />

            <div style={{ padding: "12px" }}>
              <h3>{video.title}</h3>
              <p style={{ color: "#aaa", fontSize: "14px" }}>
                {video.views}
              </p>
            </div>

          </div>
        ))}
      </div>

    </main>
  );
} 
 
