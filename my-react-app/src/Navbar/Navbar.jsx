
import "./Navbar.css";

function Navbar({ favoriteCount = 0 }) {
  return (
    <header className="navbar">

      <a href="#" className="logo">
        CampusConnect
      </a>

      <nav>
        <a href="#" className="active">Home</a>
        <a href="#events">Events</a>
        <a href="#registration">Register</a>

        <a href="#events" className="favorites-link">
          Favorites ({favoriteCount})
        </a>
      </nav>

    </header>
  );
}

export default Navbar;
