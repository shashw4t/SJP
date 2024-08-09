import React from "react";
import Layout from "/components/Layout";

// EducationPage component with education details
const EducationPage = () => (
  <Layout>
    <h1>Education</h1>
    <section>
      <h2>New Jersey Institute of Technology</h2>
      <p><em>Master's Degree, Data Science</em></p>
      <p><em>Sep 2022 - Sep 2023</em></p>
      <ul>
        <li>Specialized in data analysis, machine learning, and statistical modeling.</li>
        <li>Gained expertise in Python, R, SQL, and advanced data visualization techniques.</li>
        {/* Add more education details here */}
      </ul>
    </section>
    {/* Add more sections for other educational institutions here */}
  </Layout>
);

export default EducationPage; // Exporting EducationPage component as default