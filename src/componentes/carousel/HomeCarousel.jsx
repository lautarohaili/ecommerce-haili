import React from "react";

import img2 from "../image/img2.jpg";
import img3 from "../image/img3.jpg";

import "../carousel/HomeCarousel.css";

const HomeCarousel = () => {
  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img src={img2} className="d-block mw-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3500">
            <img
              src="https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8NTU4Mzc1fGltYWdlL3BuZ3xoNGQvaGU0LzEzMTMyODc1MzAwODk0LnBuZ3wzYzEzMzcyNjFmNjY0NDNhMTg0YTRhZGIwMDJmOWQ0OTRmYjE4YWMxNDcyMjc1ODJjM2ZmMjMwZjBmZDlmZGIx"
              className="d-block mw-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block mw-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden"></span>
        </button>
      </div>
    </>
  );
};

export default HomeCarousel;
