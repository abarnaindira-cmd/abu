import React, { useState } from "react";

export default function EventForm({ initial = {}, onSubmit, submitLabel = "Save" }) {
  const [title, setTitle] = useState(initial.title || "");
  const [description, setDescription] = useState(initial.description || "");
  const [category, setCategory] = useState(initial.category || "Workshops");
  const [date, setDate] = useState(initial.date || "");
  const [capacity, setCapacity] = useState(initial.capacity || 100);
  const [image, setImage] = useState(initial.image || "");

  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!title.trim()) e.title = "Title is required";
    if (!date) e.date = "Date is required";
    return e;
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      onSubmit({ title, description, category, date, capacity, image });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
        {errors.title && <div className="text-danger small mt-1">{errors.title}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea className="form-control" rows="4" value={description} onChange={e => setDescription(e.target.value)} />
      </div>

      <div className="row">
        <div className="col-md-4 mb-3">
          <label className="form-label">Category</label>
          <select className="form-select" value={category} onChange={e => setCategory(e.target.value)}>
            <option>Workshops</option>
            <option>Conferences</option>
            <option>Meetups</option>
            <option>Webinars</option>
          </select>
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">Date</label>
          <input type="date" className="form-control" value={date} onChange={e => setDate(e.target.value)} />
          {errors.date && <div className="text-danger small mt-1">{errors.date}</div>}
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">Capacity</label>
          <input type="number" className="form-control" value={capacity} onChange={e => setCapacity(Number(e.target.value))} />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Image URL (optional)</label>
        <input className="form-control" value={image} onChange={e => setImage(e.target.value)} placeholder="https://..." />
        <div className="form-text">Or leave blank to use placeholder image.</div>
      </div>

      <button className="btn btn-primary">{submitLabel}</button>
    </form>
  );
}
