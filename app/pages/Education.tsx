import React from "react";

const Education = () => {
  return (
    <section className="education-section p-6 bg-gray-100">
      <h2 className="section-title text-4xl font-bold mb-6 text-mint">Education</h2>
      <div className="education-item mb-6">
        <h3 className="degree-title text-2xl font-semibold text-sage">Master’s degree in Data Science</h3>
        <p className="institution italic text-black">NJIT</p>
        <p className="graduation-year italic text-black">Graduated in 2023</p>
      </div>
      <div className="education-item mb-6">
        <h3 className="degree-title text-2xl font-semibold text-sage">Bachelor’s degree in Computer Science</h3>
        <p className="institution italic text-black">Rutgers University</p>
        <p className="graduation-year italic text-black">Graduated in 2020</p>
      </div>
    </section>
  );
};

export default Education;