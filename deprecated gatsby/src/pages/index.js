import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import "./styles.css"; // Importing CSS for styling

// Navbar component with navigation links
const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar-list">
      <li className="navbar-item">
        <Link to="/" className="navbar-link">Home</Link>
      </li>
      <li className="navbar-item">
        <Link to="/about" className="navbar-link">About</Link>
      </li>
      <li className="navbar-item">
        <Link to="/contact" className="navbar-link">Contact</Link>
      </li>
    </ul>
  </nav>
);

// HomePage component with main content
const HomePage = () => (
  <div>
    <Helmet>
      <title>My Portfolio - Home</title>
      <meta name="description" content="Welcome to my portfolio website." />
    </Helmet>
    <Navbar />
    <header className="header">
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm Shashwat Singh, a Software Engineer.</p>
      <Link to="/about" className="btn">Go to About page</Link>
    </header>
    <main className="main-content">
      <section className="section">
        <h2>Projects</h2>
        <p>Here are some of my recent projects...</p>
        {/* Add more content or components here */}
      </section>
      <section className="section">
        <h2>Skills</h2>
        <p>These are the skills I have acquired...</p>
        {/* Add more content or components here */}
      </section>
    </main>
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Shashwat Singh. All rights reserved.</p>
    </footer>
  </div>
);

export default HomePage; // Exporting HomePage component as default