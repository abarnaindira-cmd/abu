import React, { useEffect, useState } from "react";
import { getEvents, deleteEvent } from "../utils/eventStorage";
import { useAuth } from "../hooks/useAuth";

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    setEvents(getEvents());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      deleteEvent(id);
      setEvents(getEvents()); // Refresh UI
    }
  };

  return (
    <div className="container dashboard-wrapper">

      <h2 className="fw-bold mb-4 text-center">Your Events</h2>

      {events.length === 0 ? (
        <p className="text-center text-muted fs-5 mt-5">
          You haven't created any events yet.
        </p>
      ) : (
        <div className="row g-4">
          {events.map((event) => (
            <div className="col-md-4" key={event.id}>
              <div className="dashboard-card shadow-sm">

                <img src={event.image} className="dash-img" alt="" />

                <div className="dash-body">
                  <span className={`badge dash-badge ${event.category.toLowerCase()}`}>
                    {event.category}
                  </span>

                  <h5 className="fw-bold mt-2">{event.title}</h5>
                  <p className="text-muted small">{event.date}</p>

                  <p className="small mb-1">
                    Registrations:{" "}
                    <strong>{event.registrations?.length || 0}</strong>
                  </p>

                  {/* Buttons */}
                  <div className="d-flex justify-content-between mt-3">
                    <button className="btn btn-sm btn-outline-primary px-3">
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger px-3"
                      onClick={() => handleDelete(event.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
