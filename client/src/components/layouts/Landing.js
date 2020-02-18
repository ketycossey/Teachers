import React from "react";

export const Landing = () => {
  return (
    <section class="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">InHouse PD</h1>
          <p className="lead">
            Create a culture of employees helping each other.
          </p>
          <div className="buttons">
            <a href="register.html" class="btn btn-primary">
              Sign Up
            </a>
            <a href="login.html" class="btn btn-light">
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Landing;
