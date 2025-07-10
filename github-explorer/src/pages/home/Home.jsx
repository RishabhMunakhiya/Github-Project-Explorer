import React, { useEffect, useState } from "react";
import RepoCard from "../../components/RepoCard";
import "./Home.css";

function Home() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/search/repositories?q=stars:>10000&sort=stars")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data.items);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-page">
      <h2 style={{ color: "white", textAlign: "center" }}>🔥 Trending Repositories</h2>
      {loading ? (
        <p style={{ color: "white", textAlign: "center" }}>Loading...</p>
      ) : (
        <div className="repo-list">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} showNote={false} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
