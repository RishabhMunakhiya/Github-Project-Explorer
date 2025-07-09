import { useState, useEffect, useRef } from "react";
import "./Home.css";

function Home() {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("all");
  const [sort, setSort] = useState("stars");
  const [repos, setRepos] = useState([]);
  const debounceTimeout = useRef(null);

  useEffect(() => {
    // Clear previous timeout
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    // Set new timeout to delay API call
    debounceTimeout.current = setTimeout(() => {
      fetchRepos();
    }, 500); // wait 500ms before fetching

    // Cleanup on unmount
    return () => clearTimeout(debounceTimeout.current);
  }, [query, language, sort]);

  const fetchRepos = async () => {
    let url = "";

    if (query.trim() !== "") {
      url = `https://api.github.com/search/repositories?q=${query}`;
      if (language !== "all") url += `+language:${language}`;
      url += `&sort=${sort}&order=desc&per_page=12`;
    } else {
      url = `https://api.github.com/search/repositories?q=stars:>10000`;
      if (language !== "all") url += `+language:${language}`;
      url += `&sort=${sort}&order=desc&per_page=12`;
    }

    try {
      const res = await fetch(url);
      const data = await res.json();
      setRepos(data.items || []);
    } catch (error) {
      console.error("Error fetching repos:", error);
      setRepos([]);
    }
  };

  return (
    <div className="home">
      <div className="filters">
        <input
          type="text"
          placeholder="Search repositories..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="all">All Languages</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="typescript">TypeScript</option>
          <option value="go">Go</option>
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="stars">Most Stars</option>
          <option value="updated">Recently Updated</option>
          <option value="forks">Most Forks</option>
        </select>
      </div>

      <div className="repo-list">
        {repos.length === 0 ? (
          <p style={{ textAlign: "center", color: "white" }}>
            No repositories found.
          </p>
        ) : (
          repos.map((repo) => (
            <div key={repo.id} className="repo-card">
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <p>
                ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
              </p>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                View Repo
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
