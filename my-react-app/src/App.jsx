
import { useState } from "react";
import "./App.css";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import EventList from "./components/Eventlist";
import StudentRegistration from "./StudentRegistration/studentForm";

function App() {
  const [favoriteCount, setFavoriteCount] = useState(0);

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

          <a href="#events" className="hero-button">
            Explore Events
          </a>

        </div>
      </section>

      {/* Events */}
      <section id="events">
        <EventList
          onFavoritesCountChange={setFavoriteCount}
        />
      </section>

      {/* Registration */}
      <section id="registration">
        <StudentRegistration />
      </section>

      <Footer />

    </div>
  );
}

export default App;
