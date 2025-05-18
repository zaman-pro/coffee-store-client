import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <button className="btn">Home</button>
      </Link>
      <Link to="/addCoffee">
        <button className="btn">Add Coffee</button>
      </Link>
      <Link to="/signup">
        <button className="btn">Sign Up</button>
      </Link>
      <Link to="/signin">
        <button className="btn">Sign In</button>
      </Link>
      <Link to="/users">
        <button className="btn">Users</button>
      </Link>
    </div>
  );
};

export default Header;
