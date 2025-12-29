import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { getEvents, registerUserToEvent } from "../utils/eventStorage";
import { useAuth } from "../hooks/useAuth";

export default function BrowseEvents() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const { user } = useAuth();

  useEffect(() => {
    setEvents(getEvents());
  }, []);

  // ⭐ REGISTER HANDLER (FIX)
  const handleRegister = (eventId) => {
    if (!user) {
      alert("Please login to register for events.");
      return;
    }

    registerUserToEvent(eventId, user.email);

    // Refresh UI
    setEvents(getEvents());

    alert("Successfully registered for the event!");
  };

  const filtered = events.filter(event => {
    const matchText =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.description.toLowerCase().includes(search.toLowerCase());

    const matchCategory = filter === "All" || event.category === filter;

    return matchText && matchCategory;
  });

  return (
    <div className="container browse-wrapper">

      <h2 className="fw-bold mb-4 text-center">Browse Events</h2>

      {/* Search & Filter */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-8 mb-2">
          <input
            type="text"
            placeholder="Search events..."
            className="form-control search-bar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-3 mb-2">
          <select
            className="form-select filter-dropdown"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Workshop">Workshop</option>
            <option value="Meetup">Meetup</option>
            <option value="Seminar">Seminar</option>
            <option value="Webinar">Webinar</option>
          </select>
        </div>
      </div>

      {/* Events Grid */}
      <div className="row g-4">
        {filtered.length > 0 ? (
          filtered.map(event => (
            <div className="col-md-4" key={event.id}>
              <EventCard 
                event={event}
                onRegister={() => handleRegister(event.id)}
              />
            </div>
          ))
        ) : (
          <div className="text-center empty-state">
            <img
              src="/no-events.png"
              alt="No events"
              className="empty-image"
            />
            <p className="mt-3 text-muted fs-5">No events found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
