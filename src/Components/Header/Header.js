import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Header.css";

function Header() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="header">
      <div className="details">
        <h4> Test Your Programming skill by Taking Our Quiz</h4>
        <div>
          <h5>Topics</h5>
          <ol>
            <h6>Html</h6>
            <h6>Css</h6>
            <h6>Javascript</h6>
            <h6>React</h6>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Header;
