import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Nav from "./nav";

export const Header = () => (
  <header>
    <Link to={"/"}>
      <h3>Events & Launches</h3>
    </Link>
 <Nav/>
  </header>
);
