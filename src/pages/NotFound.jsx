import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="comingsoon__inner">
      <h1>404 Not found.</h1>
      <br />
      <Link to="/">Homeへ</Link>
    </div>
  )
}

export default NotFound;
