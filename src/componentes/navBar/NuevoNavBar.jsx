/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";

import "../navBar/NavBar.css";

const NuevoNavBar = () => {
  return (
    <>
      <>
        <nav className="navbar navBar navbar-expand-lg ">
          <div className="container-fluid">
            <div className="titulo">
              <Link to="/" style={{ textDecoration: "none" }}>
                Electronic Hail
              </Link>
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
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/category/Notebooks"
                    style={{ textDecoration: "none" }}
                  >
                    Notebooks
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/category/Celulares"
                    style={{ textDecoration: "none" }}
                  >
                    Celulares
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/category/Tablets"
                    style={{ textDecoration: "none" }}
                  >
                    Tablets
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/category/Contacto"
                    style={{ textDecoration: "none" }}
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
              <div className="cartIcon">
                <Link className="btn btn-outline cartIcon" to="/cart">
                  <CartWidget />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    </>
  );
};

export default NuevoNavBar;

/*
<>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <div className="titulo">
            <Link to="/" style={{ textDecoration: "none" }}>
              Electronic Hail
            </Link>
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
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/category/Notebooks"
                  style={{ textDecoration: "none" }}
                >
                  Notebooks
                </Link>
              </li>
              <li className="nav-item dropdown">
                Electronica
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <Link
                      to="/category/Celulares"
                      style={{ textDecoration: "none" }}
                    >
                      Celulares
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
                      Tablets
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  to="/category/Contacto"
                  style={{ textDecoration: "none" }}
                >
                  Contacto
                </Link>
              </li>
            </ul>

            <Link className="btn btn-outline" to="/cart">
              <CartWidget />
            </Link>
          </div>
        </div>
      </nav>
    </>

*/
