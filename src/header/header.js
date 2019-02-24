import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "./nav";
import "./header.css";

export const Header = () => (
  <header>
    <Link to={"/"}>
      <h1>Events & Launches</h1>
    </Link>
    <Nav />
  </header>
);
