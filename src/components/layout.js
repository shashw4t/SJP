import React from "react";
import { Link } from "gatsby";
import Seo from "./Seo";
import "./layout.css";

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/honors">Honors & Awards</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

const Layout = ({ children, title, description }) => (
  <div>
    <Seo title={title} description={description} />
    <Header />
    <main>{children}</main>
    <footer>
      <p>&copy; {new Date().getFullYear()} Shashwat Singh</p>
    </footer>
  </div>
);

export default Layout;