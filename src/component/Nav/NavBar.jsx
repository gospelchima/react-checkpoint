import React from "react";
import "./nav.css";
import netflix from "../../assets/netflix.png";
import Button from "../reusables/Button";

const NavBar = () => {
  return (
    <nav>
      <div className="logo-container">
        <img src={netflix} alt="netflix-logo" />
        <Button
          width={150}
          height={40}
          color={"white"}
          bg={"red"}
          border={5}
          text={"Sign Up"}
          br={"none"}
        />
      </div>
    </nav>
  );
};

export default NavBar;
