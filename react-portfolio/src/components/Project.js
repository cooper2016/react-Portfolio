import React from "react";

export default function Project() {
  const style = {
    card: {
      width: "18rem",
      margin: "5px",
    },
  };

  return (
    <div className="container d-flex">
      <div className="card" style={style.card}>
        <div className="card-body">
          <h5 className="card-title">Tap-Tap-Revolution</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Full-stack Application
          </h6>
          <a
            href="https://secure-savannah-57632.herokuapp.com/"
            className="card-link"
          >
            Deployed App
          </a>
          <a
            href="https://github.com/justinwl1998/tap-tap-revolution-qr"
            className="card-link"
          >
            Github Repo
          </a>
        </div>
      </div>
      <div className="card" style={style.card}>
        <div className="card-body">
          <h5 className="card-title">Tech Blog</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Full-stack Application
          </h6>
          <a
            href="https://tech-blog123321.herokuapp.com/"
            className="card-link"
          >
            Deployed App
          </a>
          <a
            href="https://github.com/cooper2016/tech-blog"
            className="card-link"
          >
            Github Repo
          </a>
        </div>
      </div>
      <div className="card" style={style.card}>
        <div className="card-body">
          <h5 className="card-title">Fetch</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Tailwind, Google Maps API
          </h6>
          <a href="https://cooper2016.github.io/Fetch/ " className="card-link">
            Deployed App
          </a>
          <a href="https://github.com/cooper2016/Fetch " className="card-link">
            Github Repo
          </a>
        </div>
      </div>
      <div className="card" style={style.card}>
        <div className="card-body">
          <h5 className="card-title">Ecommerce Backend</h5>
          <h6 className="card-subtitle mb-2 text-muted">Express.js, APIs</h6>
          <a href="https://cooper2016.github.io/Fetch/ " className="card-link">
            Deployed App
          </a>
          <a href="https://github.com/cooper2016/Fetch " className="card-link">
            Github Repo
          </a>
        </div>
      </div>
      <div className="card" style={style.card}>
        <div className="card-body">
          <h5 className="card-title">Weather Forecast</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            jQuery, bootstrap, moment.js
          </h6>
          <a
            href="https://cooper2016.github.io/Weather-Forecast/"
            className="card-link"
          >
            Deployed App
          </a>
          <a
            href="https://github.com/cooper2016/Weather-Forecast "
            className="card-link"
          >
            Github Repo
          </a>
        </div>
      </div>
      <div className="card" style={style.card}>
        <div className="card-body">
          <h5 className="card-title">Workday Planner</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            jQuery and Bootstrap
          </h6>
          <a
            href="https://cooper2016.github.io/work-day-planner/"
            className="card-link"
          >
            Deployed App
          </a>
          <a
            href="https://github.com/cooper2016/work-day-planner"
            className="card-link"
          >
            Github Repo
          </a>
        </div>
      </div>
    </div>
  );
}
