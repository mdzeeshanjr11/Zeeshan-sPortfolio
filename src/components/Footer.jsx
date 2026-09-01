
import "../App.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-logo">
          Zeeshan<span>.</span>dev
        </div>

        <p>
          © 2026 Muhammad Zeeshan. All rights reserved.
        </p>

        <div className="footer-links">
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

          <a href="mailto:mdzeeshanjr11@gmail.com">
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;