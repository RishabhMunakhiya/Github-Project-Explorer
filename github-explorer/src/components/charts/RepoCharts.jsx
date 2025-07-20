import React from "react";
import { Pie, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function RepoCharts({ repos }) {
  const languageCount = {};
  const topStars = [];
  const topForks = [];
  const openIssues = [];

  repos.forEach((repo) => {
    const lang = repo.language || "Unknown";
    languageCount[lang] = (languageCount[lang] || 0) + 1;

    topStars.push({ label: repo.name, value: repo.stargazers_count });
    topForks.push({ label: repo.name, value: repo.forks_count });
    openIssues.push({ label: repo.name, value: repo.open_issues_count });
  });

  const pieData = {
    labels: Object.keys(languageCount),
    datasets: [
      {
        data: Object.values(languageCount),
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#00c49f", "#ffa500", "#9966ff"],
      },
    ],
  };

  const barData = {
    labels: topStars.map((r) => r.label),
    datasets: [
      {
        label: "⭐ Stars",
        data: topStars.map((r) => r.value),
        backgroundColor: "#36a2eb",
      },
      {
        label: "🍴 Forks",
        data: topForks.map((r) => r.value),
        backgroundColor: "#ff6384",
      },
    ],
  };

  const doughnutData = {
    labels: openIssues.map((r) => r.label),
    datasets: [
      {
        label: "🐞 Open Issues",
        data: openIssues.map((r) => r.value),
        backgroundColor: ["#ff6384", "#ff9f40", "#ffcd56", "#4bc0c0", "#9966ff", "#36a2eb"],
      },
    ],
  };

  return (
    <div className="charts-container">
      <div className="chart-box">
        <h3>🧠 Language Distribution</h3>
        <Pie data={pieData} />
      </div>
      <div className="chart-box">
        <h3>🚀 Stars vs Forks</h3>
        <Bar data={barData} />
      </div>
      <div className="chart-box">
        <h3>🐛 Open Issues</h3>
        <Doughnut data={doughnutData} />
      </div>
    </div>
  );
}

export default RepoCharts;
