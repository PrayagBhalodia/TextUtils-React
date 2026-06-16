import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode === 'light' ? 'light' : 'dark'} >
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">{props.homeText}</Link> */}
              <a className="nav-link active" aria-current="page" href="#">{props.homeText}</a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
              <a className="nav-link" href="#">{props.aboutText}</a>
            </li>
          </ul>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Light" onChange={() => props.listenEvent("light")} />
            <label className="form-check-label" htmlFor="inlineRadio1" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Light Mode</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Dark1" onChange={() => props.listenEvent("dark1")} />
            <label className="form-check-label" htmlFor="inlineRadio2" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Dark Mode 1</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Dark2" onChange={() => props.listenEvent("dark2")} />
            <label className="form-check-label" htmlFor="inlineRadio3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Dark Mode 2</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="Dark3" onChange={() => props.listenEvent("dark3")} />
            <label className="form-check-label" htmlFor="inlineRadio4" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Dark Mode 3</label>
          </div>

          {/* Dark/Light Mode Toggle Switch */}
          {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-3`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault" />
            <label className="form-check-label" htmlFor="switchCheckDefault">{`Enable ${props.mode} Mode`} </label>
          </div> */}

          {/* For Creating a Search Bar */}
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  homeText: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Set Title Here",
  homeText: "Home",
  aboutText: "About",
  mode: "light"
}