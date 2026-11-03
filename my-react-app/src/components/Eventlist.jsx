
import { useState } from "react";
import EventCard from "./Eventcard";
import AddEvent from "../AddEvent/AddEvent";
import SearchFilter from "../SearchFilter/SearchFilter";
import EventDetails from "../EventDetails/EventDetails";
import "./Eventlist.css";

const initialEvents = [
  {
    id: 1,
    title: "Cultural Day",
    category: "Culture",
    description:
      "Celebrate music, dance, art, and cultures from across campus.",
    date: "November 12, 2026",
    venue: "Open Air Stage",
    registrations: 0,
  },
  {
    id: 2,
    title: "Sports Meet",
    category: "Sports",
    description:
      "Join exciting games and sports competitions with your friends.",
    date: "November 18, 2026",
    venue: "College Sports Ground",
    registrations: 0,
  },
  {
    id: 3,
    title: "Tech Symposium",
    category: "Technology",
    description:
      "Explore technology, coding competitions, and innovative projects.",
    date: "November 22, 2026",
    venue: "Main Auditorium",
    registrations: 0,
  },
];

function EventList() {
  const [events, setEvents] = useState(initialEvents);
  const [favorites, setFavorites] = useState([]);
  const [registered, setRegistered] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");

  const [selectedEventId, setSelectedEventId] = useState(null);

  // Add Event
  const handleAddEvent = (newEvent) => {
    setEvents((previous) => [
      ...previous,
      {
        ...newEvent,
        id: Date.now(),
        registrations: 0,
      },
    ]);

    alert("Event Added Successfully!");
  };

  // Register
  const handleRegister = (id) => {
    if (registered.includes(id)) {
      alert("You have already registered!");
      return;
    }

    setRegistered((previous) => [...previous, id]);

    setEvents((previous) =>
      previous.map((event) =>
        event.id === id
          ? {
              ...event,
              registrations: event.registrations + 1,
            }
          : event
      )
    );

    alert("Registration Successful!");
  };

  // Favorite
  const handleFavorite = (id) => {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  // Delete Event
  const handleRemove = (id) => {
    if (!window.confirm("Delete this event?")) return;

    setEvents((previous) =>
      previous.filter((event) => event.id !== id)
    );

    setFavorites((previous) =>
      previous.filter((item) => item !== id)
    );

    setRegistered((previous) =>
      previous.filter((item) => item !== id)
    );

    if (selectedEventId === id) {
      setSelectedEventId(null);
    }
  };

  // View Details
  const handleViewDetails = (id) => {
    setSelectedEventId(id);
  };

  // Edit Event
  const handleEdit = (id) => {
    const event = events.find((item) => item.id === id);

    if (!event) return;

    const title = window.prompt("Enter Event Title:", event.title);
    if (title === null || !title.trim()) return;

    const venue = window.prompt("Enter Venue:", event.venue);
    if (venue === null || !venue.trim()) return;

    const description = window.prompt(
      "Enter Description:",
      event.description
    );
    if (description === null || !description.trim()) return;

    setEvents((previous) =>
      previous.map((item) =>
        item.id === id
          ? {
              ...item,
              title: title.trim(),
              venue: venue.trim(),
              description: description.trim(),
            }
          : item
      )
    );

    alert("Event Updated Successfully!");
  };

  // Reset Filters
  const handleReset = () => {
    setSearch("");
    setCategory("All Categories");
  };

  // Search and Category Filter
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.venue.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All Categories" ||
      event.category === category;

    return matchesSearch && matchesCategory;
  });

  const selectedEvent = events.find(
    (event) => event.id === selectedEventId
  );

  // Event Details Page
  if (selectedEvent) {
    return (
      <EventDetails
        event={selectedEvent}
        onBack={() => setSelectedEventId(null)}
        onRegister={handleRegister}
        onFavorite={handleFavorite}
        isFavorite={favorites.includes(selectedEvent.id)}
        isRegistered={registered.includes(selectedEvent.id)}
      />
    );
  }

  return (
    <section className="events-page">

      <header className="events-header">
        <p className="events-eyebrow">
          DISCOVER YOUR CAMPUS
        </p>

        <h1>Upcoming Events</h1>

        <p className="events-subtitle">
          Find opportunities to learn, connect, and participate.
        </p>
      </header>

      {/* Add Event */}
      <AddEvent onAddEvent={handleAddEvent} />

      {/* Search and Filter */}
      <SearchFilter
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        onReset={handleReset}
      />

      {/* Event Cards */}
      {filteredEvents.length === 0 ? (
        <p className="no-events">
          No matching events found.
        </p>
      ) : (
        <div className="event-list">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onRegister={handleRegister}
              onFavorite={handleFavorite}
              onRemove={handleRemove}
              onViewDetails={handleViewDetails}
              onEdit={handleEdit}
              isFavorite={favorites.includes(event.id)}
              isRegistered={registered.includes(event.id)}
            />
          ))}
        </div>
      )}

    </section>
  );
}

export default EventList;
