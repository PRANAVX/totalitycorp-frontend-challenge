import React from "react";

export default function Navbar() {
  return (
    <div class="nav-container">
      <nav className="nav">

        {/* nav for large screen */}

        <ul className="nav-large">
          <li className="nav-item">
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
          <li className="nav-item">
            <img
              className="nav-logo"
              src="/images/icons/bag.svg"
              alt="bag logo"
            ></img>
          </li>
        </ul>

        {/* nav for small screen */}
        <ul className="nav-small">
            <li className="nav-item">||</li>
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
