import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" role="banner">
      <nav className="header__menu">
        <Link className="menu-item" to="/cidr">CIDR</Link>
        <Link className="menu-item" to="/uuid/v1">UUIDv1</Link>
        <Link className="menu-item" to="/uuid/v3">UUIDv3</Link>
        <Link className="menu-item" to="/uuid/v4">UUIDv4</Link>
        <Link className="menu-item" to="/uuid/v5">UUIDv5</Link>
        <Link className="menu-item" to="/lid">LID</Link>
        <Link className="menu-item" to="/ulid">ULID</Link>
        <Link className="menu-item" to="/shortid">ShortID</Link>
        <Link className="menu-item" to="/cuid">CUID</Link>
        <Link className="menu-item" to="/timestamp">Timestamp</Link>
      </nav>
    </header>
  );
};

export default Header;
