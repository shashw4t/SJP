import React from "react";
import Layout from "../components/Layout";

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
	  </ul>
	</section>
	<section>
	  <h2>Rutgers University</h2>
	  <p><em>Bachelor's Degree, Computer Science</em></p>
	  <p><em>Sep 2018 - May 2022</em></p>
	  <ul>
		<li>Developed a strong foundation in computer science principles and programming.</li>
		<li>Gained experience in software development, algorithms, and data structures.</li>
	  </ul>
	</section>
  </Layout>
);

export default EducationPage;