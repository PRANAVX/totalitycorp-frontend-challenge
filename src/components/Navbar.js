import React from "react";
import "./Navbar.css"

export default function Navbar() {
  const activateHam = () => {
    const hamTop = document.querySelector(".hm-top");
    const hamBot = document.querySelector(".hm-bottom");
    const navbar = document.querySelector(".nav");
    const navsmall = document.querySelector(".nav-large");


    console.log(hamTop,hamBot);
    hamTop.classList.toggle("hm-active");
    hamBot.classList.toggle("hm-active");
    navbar.classList.toggle("nav-active")
    navsmall.classList.toggle("nav-small-active")
  };
  return (
    <div className="nav-container">
      <nav className="nav">
        {/* nav for large screen */}

        <ul className="nav-large">
          <li className="nav-item logo">
            <img
              className="nav-logo"
              src="/images/icons/apple.svg"
              alt="apple logo"
            ></img>
          </li>
          <li className="nav-item">Store</li>
          <li className="nav-item">Mac</li>
          <li className="nav-item">iPad</li>
          <li className="nav-item">iPhone</li>
          <li className="nav-item">Wacth</li>
          <li className="nav-item">AirPods</li>
          <li className="nav-item">TV & Home</li>
          <li className="nav-item">Only on Apple</li>
          <li className="nav-item">Accessories</li>
          <li className="nav-item">Support</li>
          <li className="nav-item">
            <img
              className="nav-logo"
              src="/images/icons/search.svg"
              alt="Search logo"
            ></img>
          </li>
          <li className="nav-item bag">
            <img
              className="nav-logo"
              src="/images/icons/bag.svg"
              alt="bag logo"
            ></img>
          </li>
        </ul>

        {/* nav for small screen */}
        <ul className="nav-small">
          <li className="nav-item" >
            <div className="hamburger" onClick={activateHam}>
              <span className="hm hm-top"></span>
              <span className="hm hm-bottom"></span>
            </div>
          </li>
          <li className="nav-item">
            <img
              className="nav-logo"
              src="/images/icons/apple.svg"
              alt="apple logo"
            ></img>
          </li>

          <li className="nav-item">
            <img
              className="nav-logo"
              src="/images/icons/bag.svg"
              alt="bag logo"
            ></img>
          </li>
        </ul>
      </nav>
    </div>
  );
}
