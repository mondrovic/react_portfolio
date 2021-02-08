import React from "react";
import "./css/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrapper">
          <div className="footer-logo">
            Matthew Ondrovic <small className="copyright">© 2021</small>
          </div>

          <div className="social-icons">
            <a
              className="social-icon-link github"
              href="https://github.com/mondrovic"
              target="_blank"
              aria-label="github"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </a>

            <a
              className="social-icon-link LinkedIn"
              href="https://www.linkedin.com/in/mondrovic/"
              target="_blank"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              className="social-icon-link facebook"
              href="https://www.facebook.com/matt.ondrovic"
              target="_blank"
              aria-label="Facebook"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
