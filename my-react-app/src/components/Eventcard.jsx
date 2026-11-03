
import "./Eventcard.css";

function EventCard({
  event,
  onRegister,
  onFavorite,
  onRemove,
  onViewDetails,
  onEdit,
  isFavorite,
  isRegistered,
}) {
  return (
    <div className="event-card">

      {/* Category */}
      <div className="event-image">
        <span>{event.category.toUpperCase()}</span>
      </div>

      {/* Event Details */}
      <div className="event-details">

        <p className="event-category">
          {event.category}
        </p>

        <h2>{event.title}</h2>

        <p className="event-description">
          {event.description}
        </p>

        <p className="event-info">
          <strong>Date:</strong> {event.date}
        </p>

        <p className="event-info">
          <strong>Venue:</strong> {event.venue}
        </p>

        <p className="event-info">
          <strong>Registrations:</strong> {event.registrations}
        </p>

        <p className="event-info">
          <strong>Event ID:</strong> {event.id}
        </p>

        {/* Register and Favorite */}
        <div className="event-buttons">

          <button
            className="register-btn"
            onClick={() => onRegister(event.id)}
          >
            {isRegistered ? "Registered" : "Register"}
          </button>

          <button
            className="favorite-btn"
            onClick={() => onFavorite(event.id)}
          >
            {isFavorite ? "Favorited" : "Add Favorite"}
          </button>

        </div>

        {/* View, Edit, Delete */}
        <div className="event-action-buttons">

          <button
            className="view-btn"
            onClick={() => onViewDetails(event.id)}
          >
            View Details
          </button>

          <button
            className="edit-btn"
            onClick={() => onEdit(event.id)}
          >
            Edit Event
          </button>

          <button
            className="delete-btn"
            onClick={() => onRemove(event.id)}
          >
            Delete Event
          </button>

        </div>

      </div>
    </div>
  );
}

export default EventCard;
