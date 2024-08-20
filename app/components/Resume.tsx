import React from "react";

const Resume = () => (
  <section className="resume-section">
	<h2 className="summary-title">Summary</h2>
	<p className="summary-text">
	  With a Master’s degree in Data Science from NJIT and a solid Computer
	  Science foundation from Rutgers University, I leverage extensive
	  experience in Java, SQL, and full-stack development. Currently, I am actively 
	  searching for new employment opportunities where I can apply my skills and 
	  contribute to meaningful projects.
	</p>
	<div className="contact-info">
	  <h1 className="name-title">Shashwat Singh</h1>
	  <p className="contact-item"><strong>Email:</strong> <span aria-hidden="true">[hidden]</span></p>
	  <p className="contact-item"><strong>Phone:</strong> <span aria-hidden="true">[hidden]</span></p>
	  <p className="contact-item"><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/shashwat" target="_blank" rel="noopener noreferrer">linkedin.com/in/shashwat</a></p>
	  <p className="contact-item"><strong>GitHub:</strong> <a href="https://github.com/shashwat" target="_blank" rel="noopener noreferrer">github.com/shashwat</a></p>
	</div>
	<hr className="divider" />
  </section>
);

export default Resume;
