import React from "react";
import { getCategoryStats } from "../api/api";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

export default function Analytics() {
  const stats = getCategoryStats();
  const labels = Object.keys(stats);
  const dataValues = labels.map(l => stats[l]);

  const barData = {
    labels,
    datasets: [{ label: "Events per Category", data: dataValues }]
  };

  const pieData = {
    labels,
    datasets: [{ data: dataValues }]
  };

  return (
    <div>
      <h4>Analytics</h4>
      <p className="text-muted">Category-wise event counts</p>

      <div className="card p-4 mb-3">
        <div style={{ maxWidth: 800 }}>
          <Bar data={barData} />
        </div>
      </div>

      <div className="card p-4">
        <div style={{ maxWidth: 400 }}>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
}
