import React from "react";
import Layout from "/components/Layout";

// ExperiencePage component with work experience details
const ExperiencePage = () => (
  <Layout>
    <h1>Experience</h1>
    <section>
      <h2>Software Engineer (SWE)</h2>
      <p><strong>HTD Talent</strong></p>
      <p><em>Jul 2024 - Present</em></p>
      <ul>
        <li>Delivered two intensive 5-week programs on Java, OOP, SQL, Docker, and MVC.</li>
        <li>Developed a versatile reservation system and a comprehensive full-stack website.</li>
        {/* Add more experience details here */}
      </ul>
    </section>
    {/* Add more sections for other work experiences here */}
  </Layout>
);

export default ExperiencePage; // Exporting ExperiencePage component as default