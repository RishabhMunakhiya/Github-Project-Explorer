import { useState, useEffect } from "react";
import RepoCard from "../components/RepoCard";

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookmarkedRepos")) || [];
    setBookmarks(saved);
  }, []);

  const handleNoteUpdate = (id, newNote) => {
    const updated = bookmarks.map((item) =>
      item.id === id ? { ...item, note: newNote } : item
    );
    setBookmarks(updated);
  };

  return (
    <div className="bookmarks-page">
      <h2 style={{ textAlign: "center", color: "white" }}>📌 Bookmarked Repositories</h2>
      <div className="repo-list">
        {bookmarks.length === 0 ? (
          <p style={{ textAlign: "center", color: "white" }}>No bookmarks found.</p>
        ) : (
          bookmarks.map((repo) => (
            <RepoCard
              key={repo.id}
              repo={repo}
              showNote={true}
              onNoteChange={handleNoteUpdate}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Bookmarks;
