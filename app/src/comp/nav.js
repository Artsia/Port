import './nav.css'

function Navbar() {

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a href="https://github.com/Artsia" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
