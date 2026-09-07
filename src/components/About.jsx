import "../App.css";
function Hero() {
  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">

      <div className="orb orb-a"></div>
      <div className="orb orb-b"></div>

      <div className="hero-content">
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="pulse"></span>
              Open to entry-level roles · Hyderabad or Remote
            </div>

            <h1 className="hero-name">
             Mohammed  <span className="grad">Zeeshan</span>
            </h1>

            <div className="hero-role">
              <span className="b">Java & Spring Boot</span>

              <span className="sep">×</span>

              <span className="r">React.js</span>

              <span> — Full Stack Developer</span>
            </div>

            <p className="hero-desc">
              I am a backend-focused Java developer who enjoys building
              REST APIs, connecting applications with databases, and
              developing clean Spring Boot applications. I also have
              frontend knowledge with React.js.
            </p>

            <div className="hero-ctas">
              <button
                className="btn btn-primary"
                onClick={scrollToProjects}
              >
                See My Projects
              </button>

              <button
                className="btn btn-ghost"
                onClick={scrollToContact}
              >
                Contact Me
              </button>
            </div>

            <div className="hero-meta">
              <span>
                📍 <b>Hyderabad, India</b>
              </span>

              <span>
                🎓 <b>B.Sc. Computer Science</b>, 2025
              </span>

              <span>
                ☕ <b>Java + Spring Boot</b>
              </span>
            </div>
          </div>

          <div className="profile-panel">
            <div className="profile-card">
              <img
                src="/images/profile.jpeg"
                alt="Mohammed Zeeshan"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
