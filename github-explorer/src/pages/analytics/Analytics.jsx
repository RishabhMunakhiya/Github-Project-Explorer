import React, { useEffect, useState } from "react";
import RepoCharts from "../../components/charts/RepoCharts";
import "./Analytics.css";

function Analytics() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/search/repositories?q=stars:%3E10000&sort=stars&per_page=30")
      .then((res) => res.json())
      .then((data) => setRepos(data.items));
  }, []);

  return (
    <div className="analytics-page">
      <h2>📊 GitHub Analytics Dashboard</h2>
      {repos.length > 0 ? <RepoCharts repos={repos} /> : <p>Loading Charts...</p>}
    </div>
  );
}

export default Analytics;
