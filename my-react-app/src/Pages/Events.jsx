
import EventList from "../components/Eventlist";

function Events({ onFavoritesCountChange }) {
  return (
    <div className="events-page-container">
      <EventList
        onFavoritesCountChange={onFavoritesCountChange}
      />
    </div>
  );
}

export default Events;
