import React from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiPlusCircle, FiBarChart2 } from "react-icons/fi";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-content">

      {/* Hero Section */}
      <div className="hero text-center mb-5">
        <h1 className="fw-bold display-5">Smart Event Management</h1>
        <p className="lead text-muted">
          Create, manage, and track events seamlessly with a modern dashboard.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="features">
        <div className="row g-4 justify-content-center">

          {/* Browse Events */}
          <div className="col-md-4 col-sm-10">
            <div className="feature-card text-center">
              <FiCalendar size={48} className="feature-icon" />
              <h3 className="fw-bold mt-3">Browse Events</h3>
              <p className="text-muted">Discover upcoming events and register effortlessly.</p>
              <Link to="/events" className="btn btn-dark w-100 mt-2">View Events</Link>
            </div>
          </div>

          {/* Create Event */}
          <div className="col-md-4 col-sm-10">
            <div className="feature-card text-center">
              <FiPlusCircle size={48} className="feature-icon" />
              <h3 className="fw-bold mt-3">Create Event</h3>
              <p className="text-muted">Design and publish your own events quickly.</p>
              <Link to="/create" className="btn btn-dark w-100 mt-2">Create Event</Link>
            </div>
          </div>

          {/* Analytics */}
          <div className="col-md-4 col-sm-10">
            <div className="feature-card text-center">
              <FiBarChart2 size={48} className="feature-icon" />
              <h3 className="fw-bold mt-3">Analytics</h3>
              <p className="text-muted">View insights and event popularity with charts.</p>
              <Link to="/analytics" className="btn btn-dark w-100 mt-2">View Analytics</Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
