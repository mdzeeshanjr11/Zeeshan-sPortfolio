
import "../App.css";

function Contact() {
  return (
    <section id="contact">

      <div className="reveal">

        <div className="section-label">
         Contact
       </div>

        <div className="contact-box">

          <div>

            <div className="contact-avail">

              <span className="availability-dot"></span>

              Open to Work

            </div>

            <h2>
              Let's build something.
            </h2>

            <p>
              I am looking for an entry-level Java,
              Spring Boot or Full Stack Developer
              opportunity in Hyderabad or Remote.
            </p>

            <div className="contact-links">

              <a href="mailto:mdzeeshanjr11@gmail.com">
                Email
              </a>

              <a href="tel:+91 9172072965">
                Phone
              </a>

              <a
                href="https://github.com/mdzeeshanjr11"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/mohammed-zeeshan-a7b763326/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

            </div>

          </div>

          <div className="contact-actions">

            <a
              href="mailto:Mdzeeshanjr11@gmail.com"
              className="btn btn-primary"
            >
              Email Me
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;