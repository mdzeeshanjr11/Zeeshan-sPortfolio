import "../App.css";

const backendSkills = [
  
  "Java 21",
  "OOP",
  "Collections",
  "Stream API",
  "Spring Boot",
  "Spring MVC",
  "Spring Data JPA",
  "Hibernate",
  "Spring Security",
  "REST API",
  "Microservices",
  "System Design"
  
];

const databases = [
  "MySQL",
  "PostgreSQL",
  "Oracle"
];

const frontendSkills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Responsive Design"
];

const tools = [
  "Git",
  "GitHub",
  "Maven",
  "Docker",
  "CI/CD",
  "GitHub Actions",
  "Kafka",
  "Redis"
];

function Skills() {
  return (
    <section id="skills">

      <div className="reveal">

        <div className="section-label">
          Skills
        </div>

        <h2 className="section-title">
          What I work with
        </h2>

        <div className="skills-split">

          {/* Backend */}

          <div className="skill-col backend">

            <h3>
              ⚙ Backend
            </h3>

            <div className="skill-tags">

              {backendSkills.map((skill) => (
                <span
                  className="tag"
                  key={skill}
                >
                  {skill}
                </span>
              ))}

            </div>

            <div className="skill-tools">

              <div className="skill-tools-label">
                Databases
              </div>

              <div className="skill-tags">

                {databases.map((database) => (
                  <span
                    className="tag"
                    key={database}
                  >
                    {database}
                  </span>
                ))}

              </div>

            </div>

          </div>


          {/* Frontend */}

          <div className="skill-col frontend">

            <h3>
              ◈ Frontend & Tools
            </h3>

            <div className="skill-tags">

              {frontendSkills.map((skill) => (
                <span
                  className="tag"
                  key={skill}
                >
                  {skill}
                </span>
              ))}

            </div>

            <div className="skill-tools">

              <div className="skill-tools-label">
                Tools & Technologies
              </div>

              <div className="skill-tags">

                {tools.map((tool) => (
                  <span
                    className="tag"
                    key={tool}
                  >
                    {tool}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;