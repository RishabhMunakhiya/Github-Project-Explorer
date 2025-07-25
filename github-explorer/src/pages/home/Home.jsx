import React, { useEffect, useState } from "react";
import RepoCard from "../../components/RepoCard";
import "./Home.css";

function Home() {
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("");
  const [sortBy, setSortBy] = useState("stars");
  const [loading, setLoading] = useState(true);

  // Fetch trending repos from GitHub API
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/search/repositories?q=stars:>10000&sort=${sortBy}&order=desc`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data.items || []);
        setFilteredRepos(data.items || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching repos:", error);
        setLoading(false);
      });
  }, [sortBy]);

  // Handle live filtering
  useEffect(() => {
    let filtered = repos;

    if (search.trim() !== "") {
      filtered = filtered.filter((repo) =>
        repo.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (language !== "") {
      filtered = filtered.filter((repo) => repo.language === language);
    }

    setFilteredRepos(filtered);
  }, [search, language, repos]);

  return (
    <div className="home-page">
      <h2 style={{ color: "white", textAlign: "center", marginBottom: "30px" }}>
        🔥 Trending Repositories
      </h2>

      {/* Filter Section */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="">All Languages</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="C++">C++</option>
          <option value="TypeScript">TypeScript</option>
          <option value="Go">Go</option>
        </select>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="stars">Sort by Stars</option>
          <option value="updated">Sort by Last Updated</option>
          <option value="forks">Sort by Forks</option>
        </select>
      </div>

      {loading ? (
        <p style={{ color: "white", textAlign: "center" }}>Loading...</p>
      ) : (
        <div className="repo-list">
          {filteredRepos.length > 0 ? (
            filteredRepos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} showNote={false} />
            ))
          ) : (
            <p style={{ color: "white", textAlign: "center" }}>
              No repositories found.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
