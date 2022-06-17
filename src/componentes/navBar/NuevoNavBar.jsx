import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";

import "../navBar/NavBar.css";

const NuevoNavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <div className="titulo">
            <a className="nav-link active" aria-current="page" href="#">
              <Link to="/" style={{ textDecoration: "none" }}>
                Electronic Hail
              </Link>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse justify-content-end navbar-collapse"
            id="navbarScroll"
          >
            <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/category/Notebooks"
                  style={{ textDecoration: "none" }}
                >
                  <a className="nav-link" href="#">
                    Notebooks
                  </a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Electronica
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <Link
                      to="/category/Celulares"
                      style={{ textDecoration: "none" }}
                    >
                      <a className="dropdown-item" href="#">
                        Celulares
                      </a>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      to="/category/Tablets"
                      style={{ textDecoration: "none" }}
                    >
                      <a className="dropdown-item" href="#">
                        Tablets
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  to="/category/Contacto"
                  style={{ textDecoration: "none" }}
                >
                  <a className="nav-link" href="#">
                    Contacto
                  </a>
                </Link>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <button className="btn btn-outline">
                <CartWidget />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NuevoNavBar;
