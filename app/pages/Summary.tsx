import React from "react";

const Resume = () => (
  <section className="resume-section p-6 bg-gray-100 flex justify-end items-center min-h-screen">
    <div className="contact-info mb-6 text-left">
      <h1 className="name-title text-4xl font-bold mb-2">Shashwat Singh</h1>
      <p className="contact-item text-lg"><strong>Email:</strong> <span aria-hidden="true">[hidden]</span></p>
      <p className="contact-item text-lg"><strong>Phone:</strong> <span aria-hidden="true">[hidden]</span></p>
      <p className="contact-item text-lg"><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/shashwat" target="_blank" rel="noopener noreferrer" className="text-blue-500">linkedin.com/in/shashwat</a></p>
      <p className="contact-item text-lg"><strong>GitHub:</strong> <a href="https://github.com/shashwat" target="_blank" rel="noopener noreferrer" className="text-blue-500">github.com/shashwat</a></p>
    </div>
    <hr className="divider border-t-2 border-gray-300 mb-6" />
    <div className="text-right">
      <h2 className="summary-title text-2xl font-semibold mb-4">Summary</h2>
      <p className="summary-text text-lg">
        With a Master’s degree in Data Science from NJIT and a solid Computer
        Science foundation from Rutgers University, I leverage extensive
        experience in Java, SQL, and full-stack development. Currently, I am actively 
        searching for new employment opportunities where I can apply my skills and 
        contribute to meaningful projects.
      </p>
    </div>
  </section>
);

export default Resume;