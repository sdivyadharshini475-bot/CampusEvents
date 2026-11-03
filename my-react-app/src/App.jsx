import { useState } from "react";
import "./App.css";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import EventList from "./components/Eventlist";
import StudentRegistration from "./StudentRegistration/StudentForm";

function App() {
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [isViewingDetails, setIsViewingDetails] = useState(false);

  return (
    <div className="App">

      <Navbar favoriteCount={favoriteCount} />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">

          <p className="hero-label">
            CONNECT • PARTICIPATE • GROW
          </p>

          <h1>
            Make Your Campus
            <br />
            <span>Experience Count</span>
          </h1>

          <p className="hero-description">
            Discover exciting campus events, connect with
            fellow students, and make every moment memorable.
          </p>

          <div className="hero-buttons">
            <a href="#events" className="hero-button">
              Explore Events
            </a>

            <a href="#registration" className="hero-button">
              Register for an Event
            </a>
          </div>

        </div>
      </section>

      {/* Events Section */}
      <section id="events">
        <EventList
          onFavoritesCountChange={setFavoriteCount}
          onDetailsViewChange={setIsViewingDetails}
        />
      </section>

      {/* Registration Form - Hidden in Event Details */}
      {!isViewingDetails && (
        <section id="registration">
          <StudentRegistration />
        </section>
      )}

      <Footer />

    </div>
  );
}

export default App;