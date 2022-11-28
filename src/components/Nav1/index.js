import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import navImg from "../../imgs/WebHyber.jpg";

const Nav1 = () => {
  return (

    <div>

      <header className="bg-dark row justify-content-between align-items-center">
      <Link exact to="/" className="header-link">
        <div className="col-3 col-sm-9 col-lg-3 " id="page-up">
          <img src={navImg} id="logo"  alt="logo"/>
        </div>
      </Link>
      <div className="col-7 col-sm-9  col-lg-4 header-links">
        <nav className="nav ml-5 nav-one w-100">
          <Link className="nav-link p-1 m-4 header-links" exact to="/">
            Home
          </Link>
          <Link className="nav-link p-1 m-4 header-links" to="/Contact">
            Contact us
          </Link>
          <Link className="nav-link p-1 m-4 header-links" to="/Privacy">
            Privacy policy
          </Link>
        </nav>
      </div>

      <div className="col-lg-3  col-sm-9 header-form-wrapper">
        <form className="form-inline my-2 my-lg-0 nav-form">
          <input
            className="col-7 m-100 form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="col-4 btn btn-primary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </header>

  </div>


  );
};

export default Nav1;
