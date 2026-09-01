
import "../App.css";
function Navbar() {
  return (
    <header className="topbar">
      <div className="topbar-inner">

        <a href="#home" className="logo">
        Mohammed<span>.Zeeshan</span>
        </a>

        <nav className="navlinks">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;