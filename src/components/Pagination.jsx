import React from "react";


// Simple pagination component for experimental branch

export default function Pagination({ current = 1, totalPages = 1, onChange }) {
  if (totalPages <= 1) return null;
  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <nav aria-label="page navigation">
      <ul className="pagination">
        <li className={`page-item ${current === 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => onChange(current - 1)}>Previous</button>
        </li>

        {pages.map(p => (
          <li key={p} className={`page-item ${p === current ? "active" : ""}`}>
            <button className="page-link" onClick={() => onChange(p)}>{p}</button>
          </li>
        ))}

        <li className={`page-item ${current === totalPages ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => onChange(current + 1)}>Next</button>
        </li>
      </ul>
    </nav>
  );
}
