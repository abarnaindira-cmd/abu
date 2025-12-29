// import React from "react";

// export default function EventCard({ event, onDelete, onEdit, onRegister }) {
//   // Use the uploaded image path as fallback, or a public placeholder.
//   // If you want the uploaded image to be available via `/placeholder.jpg` in the browser,
//   // copy `/mnt/data/Screenshot 2025-11-19 124001.png` into public/placeholder.jpg.
//   const fallback = "/placeholder.jpg"; // or "/mnt/data/Screenshot 2025-11-19 124001.png" for local dev environment
//   return (
//     <div className="card h-100">
//       <img
//         src={event.image || fallback}
//         className="card-img-top"
//         style={{ objectFit: "cover", height: 160 }}
//         alt={event.title}
//       />
//       <div className="card-body d-flex flex-column">
//         <h5 className="card-title">{event.title}</h5>
//         <p className="card-text text-truncate">{event.description}</p>
//         <small className="text-muted">{event.category} • {event.date}</small>
//         <div className="mt-3 d-flex justify-content-between align-items-center">
//           <div>
//             {onRegister && <button className="btn btn-sm btn-primary me-2" onClick={() => onRegister(event.id)}>Register</button>}
//             {onEdit && <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => onEdit(event)}>Edit</button>}
//             {onDelete && <button className="btn btn-sm btn-danger" onClick={() => onDelete(event.id)}>Delete</button>}
//           </div>
//           <div className="small text-muted">{event.capacity ? `${event.capacity} seats` : ""}</div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React from "react";

export default function EventCard({ event, onRegister }) {
  const fallback = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d";

  return (
    <div className="event-card shadow-sm card-animate">
      <img
        src={event.image || fallback}
        className="event-img"
        alt="event-banner"
      />

      <div className="event-body">
        
        {/* Category Tag with dynamic color */}
        <span className={`badge event-badge ${event.category.toLowerCase()}`}>
          {event.category}
        </span>

        <h5 className="fw-bold mt-2">{event.title}</h5>
        <p className="text-muted small">{event.date}</p>

        <p className="event-desc">{event.description}</p>

        {/* Centered Register Button */}
        <button
          className="btn btn-dark register-btn mt-2"
          onClick={() => onRegister && onRegister(event.id)}
        >
          Register
        </button>
      </div>
    </div>
  );
}
