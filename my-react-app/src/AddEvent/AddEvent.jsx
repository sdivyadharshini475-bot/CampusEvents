
import { useState } from "react";
import "./AddEvent.css";

function AddEvent({ onAddEvent }) {

  const [event, setEvent] = useState({
    title: "",
    category: "",
    date: "",
    venue: "",
    description: "",
  });

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddEvent({
      ...event,
      date: new Date(event.date + "T00:00:00")
        .toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
    });

    setEvent({
      title: "",
      category: "",
      date: "",
      venue: "",
      description: "",
    });
  };

  return (
    <div className="add-event-container">

      <h2>Add a New Event</h2>

      <p>Fill in the event details below.</p>

      <form onSubmit={handleSubmit}>

        <div className="event-form-grid">

          {/* Event Title */}
          <div>
            <label>Event Title *</label>

            <input
              type="text"
              name="title"
              placeholder="Eg. React Workshop"
              value={event.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Category */}
          <div>
            <label>Category *</label>

            <select
              name="category"
              value={event.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Culture">Culture</option>
              <option value="Sports">Sports</option>
              <option value="Technology">Technology</option>
              <option value="Design">Design</option>
              <option value="Tech">Tech</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label>Date *</label>

            <input
              type="date"
              name="date"
              value={event.date}
              onChange={handleChange}
              required
            />
          </div>

          {/* Venue */}
          <div>
            <label>Venue *</label>

            <input
              type="text"
              name="venue"
              placeholder="Eg. Seminar Hall"
              value={event.venue}
              onChange={handleChange}
              required
            />
          </div>

        </div>

        {/* Description */}
        <label>Description *</label>

        <textarea
          name="description"
          placeholder="Describe the event..."
          value={event.description}
          onChange={handleChange}
          required
        />

        {/* Submit */}
        <button type="submit">
          Add Event
        </button>

      </form>

    </div>
  );
}

export default AddEvent;
