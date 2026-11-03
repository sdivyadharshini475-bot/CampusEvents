
function Home() {
  return (
    <section className="hero">
      <div className="hero-content">

        <p className="hero-label">
          YOUR CAMPUS, YOUR COMMUNITY
        </p>

        <h1>
          Make Your Campus
          <br />
          <span>Experience Count.</span>
        </h1>

        <p className="hero-description">
          Discover exciting events, meet new people,
          and make the most of your college life.
        </p>

        <div className="hero-buttons">
          <a href="/events" className="hero-button">
            Explore Events
          </a>

          <a href="/register" className="hero-button">
            Register for an Event
          </a>
        </div>

      </div>
    </section>
  );
}

export default Home;
