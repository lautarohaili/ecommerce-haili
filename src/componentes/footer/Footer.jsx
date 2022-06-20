/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import Github from "../image/icons-github.png";
import Linkedin from "../image/icons-linkedin.png";
import Correo from "../image/icons-correo.png";

import "../footer/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="redes">
        <a
          className="social-github"
          href="https://github.com/lautarohaili"
          target="blank"
        >
          <img src={Github} className="github" />
        </a>

        <a
          className="social-linkedin"
          href="https://www.linkedin.com/in/lautaro-haili/"
          target="blank"
        >
          <img src={Linkedin} className="linkedin" />
        </a>

        <a
          className="social-correo"
          href="."
          target="blank"
          onClick={() => (window.location = "mailto:lautarohaili@gmail.com")}
        >
          <img src={Correo} className="correo" />
        </a>
      </div>
      <p>
        © 2022 Copyright | Proyecto creado por <strong>Lautaro Haili</strong>{" "}
        con fines educativos .
      </p>
    </footer>
  );
}

export default Footer;

/*
      <div className=" social">
        <a
          className="social-github"
          href="https://github.com/lautarohaili"
          target="blank"
        >
          <img src={Github} className="github" />
        </a>
        <a
          className="social-linkedin"
          href="https://www.linkedin.com/in/lautaro-haili/"
          target="blank"
        >
          <img src={Linkedin} className="linkedin" />
        </a>
        <a
          className="social-correo"
          href="."
          target="blank"
          onClick={() => (window.location = "mailto:lautarohaili@gmail.com")}
        >
          <img src={Correo} className="correo" />
        </a>
      </div>

      <div className="copyright">
        © 2022 Copyright | Proyecto creado por <strong>Lautaro Haili</strong>{" "}
        con fines educativos .
      </div> */
