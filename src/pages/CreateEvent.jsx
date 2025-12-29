import React, { useState } from "react";
import { saveEvent } from "../utils/eventStorage";
import { useNavigate } from "react-router-dom";

export default function CreateEvent() {
  const [form, setForm] = useState({
    title: "",
    category: "Workshop",
    date: "",
    image: "",
    description: "",
  });

  const nav = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      ...form,
      id: Date.now(),
      registrations: [],
    };

    saveEvent(newEvent);
    alert("Event created successfully!");
    nav("/events");
  };

  return (
    <div className="container create-wrapper">
      <div className="create-box shadow-lg">
        <h2 className="fw-bold mb-4 text-center">Create New Event</h2>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Event Title</label>
            <input
              type="text"
              name="title"
              className="form-control input-custom"
              placeholder="Enter event title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Category */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Category</label>
            <select
              name="category"
              className="form-select input-custom"
              value={form.category}
              onChange={handleChange}
            >
              <option>Workshop</option>
              <option>Meetup</option>
              <option>Seminar</option>
              <option>Webinar</option>
            </select>
          </div>

          {/* Date */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Event Date</label>
            <input
              type="date"
              name="date"
              className="form-control input-custom"
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>

          {/* Image URL */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Event Image URL</label>
            <input
              type="text"
              name="image"
              className="form-control input-custom"
              placeholder="Paste an image URL"
              value={form.image}
              onChange={handleChange}
            />
          </div>

          {/*  Description */}
          
          <div className="mb-3">
            <label className="form-label fw-semibold">Description</label>
            <textarea
              name="description"
              className="form-control input-custom"
              rows="4"
              placeholder="Enter event description"
              value={form.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button className="btn btn-dark w-100 create-btn">
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
}
