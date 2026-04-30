export default function Home() {
  const videos = [
    { title: "First Video", views: "1M views" },
    { title: "Second Video", views: "500K views" },
    { title: "Third Video", views: "250K views" },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-2">🔥 Ray’sStream</h1>
      <p className="text-gray-400 mb-6">
        The future of video streaming starts here.
      </p>

      {/* Search */}
      <input
        type="text"
        placeholder="Search videos..."
        className="w-full p-3 
     
 
