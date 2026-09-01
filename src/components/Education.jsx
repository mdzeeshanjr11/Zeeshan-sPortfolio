
import "../App.css";
function Education() {
  return (
    <section id="education">

      <div className="reveal">

        <div className="section-label">
           Education
        </div>

        <h2 className="section-title">
          Education & Learning
        </h2>

        <div className="edu-grid">

          <div className="edu-card">

            <h3>
              Bachelor of Computer Science
            </h3>

            <div className="sub">
              Swami Ramanand Teerth Marathwada University,
              Nanded, Maharashtra
            </div>

            <div className="badge">
              Graduated 2025
            </div>

          </div>


          <div className="edu-card">

            <h3>
              Java Full Stack Development
            </h3>

            <ul className="cert-list">

              <li>
                Naresh IT — Core Java & Advanced Java
              </li>

              <li>
                Spring Boot & Spring MVC
              </li>

              <li>
                Spring Data JPA & Hibernate
              </li>

              <li>
                REST APIs & Microservices
              </li>

              <li>
                MySQL & SQL
              </li>

              <li>
                HTML, CSS, JavaScript & React.js
              </li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;