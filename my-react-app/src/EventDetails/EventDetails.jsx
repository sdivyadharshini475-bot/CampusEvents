
import "./EventDetails.css";

function EventDetails({
  event,
  onBack,
  onRegister,
  onFavorite,
  isFavorite,
  isRegistered,
}) {
  if (!event) return null;

  return (
    <div className="event-details-container">

      <button className="back-btn" onClick={onBack}>
        ← Back to Events
      </button>

      <div className="event-details-card">

        <span className="details-category">
          {event.category}
        </span>

        <h1>{event.title}</h1>

        <p className="details-description">
          {event.description}
        </p>

        <div className="details-info">

          <p>
            <strong>Event ID:</strong> {event.id}
          </p>

          <p>
            <strong>Date:</strong> {event.date}
          </p>

          <p>
            <strong>Venue:</strong> {event.venue}
          </p>

          <p>
            <strong>Registrations:</strong> {event.registrations}
          </p>

        </div>

        <div className="details-buttons">

          <button
            className="details-register-btn"
            onClick={() => onRegister(event.id)}
            disabled={isRegistered}
          >
            {isRegistered ? "Registered" : "Register"}
          </button>

          <button
            className="details-favorite-btn"
            onClick={() => onFavorite(event.id)}
          >
            {isFavorite ? "Favorited" : "Add Favorite"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default EventDetails;
