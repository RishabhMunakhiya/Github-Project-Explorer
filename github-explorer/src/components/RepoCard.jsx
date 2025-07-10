import { useState, useEffect } from "react";
import "./RepoCard.css";

function RepoCard({ repo, showNote, onNoteChange }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [note, setNote] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookmarkedRepos")) || [];
    const found = saved.find((item) => item.id === repo.id);
    if (found) {
      setBookmarked(true);
      setNote(found.note || "");
    }
  }, [repo]);

  const toggleBookmark = () => {
    const saved = JSON.parse(localStorage.getItem("bookmarkedRepos")) || [];

    if (bookmarked) {
      const updated = saved.filter((item) => item.id !== repo.id);
      localStorage.setItem("bookmarkedRepos", JSON.stringify(updated));
      setBookmarked(false);
    } else {
      saved.push({ ...repo, note });
      localStorage.setItem("bookmarkedRepos", JSON.stringify(saved));
      setBookmarked(true);
    }
  };

  const handleNoteChange = (e) => {
    const newNote = e.target.value;
    setNote(newNote);
    const saved = JSON.parse(localStorage.getItem("bookmarkedRepos")) || [];
    const updated = saved.map((item) =>
      item.id === repo.id ? { ...item, note: newNote } : item
    );
    localStorage.setItem("bookmarkedRepos", JSON.stringify(updated));
    if (onNoteChange) onNoteChange(repo.id, newNote);
  };

  return (
    <div className="repo-card">
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <p>⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}</p>
      <a href={repo.html_url} target="_blank" rel="noreferrer">View Repo</a>

      <button className="bookmark-btn" onClick={toggleBookmark}>
        {bookmarked ? "★ Bookmarked" : "☆ Bookmark"}
      </button>

      {showNote && (
        <textarea
          className="note-input"
          placeholder="Write your notes here..."
          value={note}
          onChange={handleNoteChange}
        />
      )}
    </div>
  );
}

export default RepoCard;
