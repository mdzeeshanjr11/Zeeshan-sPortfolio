
import "../App.css";


const projects = [
  
  

  {
    name: "Banking Application",
    metric: "Java + MySQL",
    description:
      "A banking application developed using Java and MySQL with account management and database operations.",
    stack: ["Java", "JDBC", "MySQL"],
    github: "https://github.com/mdzeeshanjr11/ATM-MANAGEMENT-PROJECT.git"
  },

  {
    name: "Spring Boot REST API",
    metric: "Spring Boot",
    description:
      "A backend REST API application using Spring Boot, Spring MVC, JPA, Hibernate and MySQL.",
    stack: [
      "Java",
      "Spring Boot",
      "JPA",
      "Hibernate",
      "MySQL"
    ],
    github: "https://github.com/mdzeeshanjr11/mine-spring-boot-project.git"
  },

  {
    name: "React Portfolio",
    metric: "React.js",
    description:
      "A responsive developer portfolio built using React.js with reusable components and responsive UI.",
    stack: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    github: "#"
  },

  {
    name: "Full Stack FFC website ",
    metric: "React.js,Spring Boot",
    description:
      "A beautiful Friends  football club website which give the information about the team .",
    stack: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Spring Boot",
        "MySQL",

    ],
    github: "https://github.com/mdzeeshanjr11/FFC_Fullstackprojct.git"
  },
  {
   name: "Hotel Booking Microservices",
    metric: "Spring Boot, Microservices",
    description: "A hotel booking application built using Spring Boot and Microservices architecture, allowing users to book rooms and manage reservations.",
   
    stack: [
      "Spring Boot",
      "Spring security",
      "api gateway",
      "eureka server",
      "hibernate ,jpa",
        "MySQL",

    ],
    github: "https://github.com/mdzeeshanjr11/Microservices_Application.git"
  }


];

function Projects() {
  return (
    <section id="projects">

      <div className="reveal">

        <div className="section-label">
           Projects
        </div>

        <h2 className="section-title">
          Things I've Built
        </h2>

        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.name}
            >

              <div className="project-name">
                {project.name}
              </div>

              <div className="project-metric">
                {project.metric}
              </div>

              <p className="project-desc">
                {project.description}
              </p>

              <div className="project-stack">

                {project.stack.map((technology) => (

                  <span
                    className="stack-tag"
                    key={technology}
                  >
                    {technology}
                  </span>

                ))}

              </div>

              <div className="project-actions">

                <a
                  href="https://github.com/mdzeeshanjr11"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  GitHub →
                </a>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;