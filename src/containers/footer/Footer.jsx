import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <footer className="Footer">
      <section className="Contact-section">
        <div className="Contact-item">
          <h4 className="Footer-title">
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </h4>
          <p className="Footer-info Ig">
            <a
              href="https://www.instagram.com/franco.c.v/"
              target="_blank"
              rel="noopener noreferrer"
              className="Footer-anchor"
            >
              @franco.c.v
            </a>
          </p>
        </div>
        <div className="Contact-item">
          <h4 className="Footer-title">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </h4>
          <p className="Footer-info In">
            <a
              href="https://www.linkedin.com/in/carlos-alejandro-franco-vel%C3%A1squez-670421145/"
              target="_blank"
              rel="noopener noreferrer"
              className="Footer-anchor"
            >
              {" "}
              Carlos Franco
            </a>
          </p>
        </div>
        <div className="Contact-item">
          <h4 className="Footer-title">
            <FontAwesomeIcon icon={faGithub} /> Git Hub
          </h4>
          <p className="Footer-info Gh">
            <a
              href="https://github.com/Franker88"
              target="_blank"
              rel="noopener noreferrer"
              className="Footer-anchor"
            >
              Franker88
            </a>
          </p>
        </div>
        <div className="Contact-item">
          <h4 className="Footer-title">
            <FontAwesomeIcon icon={faMailBulk} /> Gmail
          </h4>
          <p className="Footer-info Ig">franker5588@gmail.com</p>
        </div>
        <div className="Contact-item">
          <h4 className="Footer-title">
            <FontAwesomeIcon icon={faMailBulk} /> Alternative Gm
          </h4>
          <p className="Footer-info In">cafrancov2510@gmail.com</p>
        </div>
        <div className="Contact-item">
          <h4 className="Footer-title">
            <FontAwesomeIcon icon={faPhone} /> Phone
          </h4>
          <p className="Footer-info Gh">+58 414-9008364</p>
        </div>
      </section>
      <section className="Rights">
        <p>Made with React.js</p>
        <p>
          All Rights Reserved <FontAwesomeIcon icon={faCopyright} />
        </p>
      </section>
    </footer>
  );
};

export { Footer };
