import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null)
  const [mode, setMode] = useState("light")

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const listenEvent = (newMode) => {
    setMode(newMode);
    if (newMode === "dark1") {
      document.body.style.backgroundColor = "#1c2a38"
      showAlert("Dark Mode 1 has been enabled", "success")
    }
    else if (newMode === "light") {
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been enabled", "success")
    }
    else if (newMode === "dark2") {
      document.body.style.backgroundColor = "#163021"
      showAlert("Dark Mode 2 has been enabled", "success")
    }
    else if (newMode === "dark3") {
      document.body.style.backgroundColor = "#250c0c"
      showAlert("Dark Mode 3 has been enabled", "success")
    }
  }

  return (
    <>
      {/* <Router>
        <Navbar title="TextUtils" homeText="Home" aboutText="About" mode={mode} listenEvent={listenEvent} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>
        </div>
      </Router> */}
      <Navbar title="TextUtils" homeText="Home" aboutText="About" mode={mode} listenEvent={listenEvent} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App;
