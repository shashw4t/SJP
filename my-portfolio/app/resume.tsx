// Resume.tsx
import React from "react";

const Resume = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Resume</h2>
      <section>
        <h3 className="text-xl font-semibold">Summary</h3>
        <p>
          With a Master’s degree in Data Science from NJIT and a solid Computer
          Science foundation from Rutgers University, I leverage extensive
          experience in Java, SQL, and full-stack development. Currently, at HTD
          Talent, I enhance client projects by delivering tailored software
          solutions, including a versatile reservation system. I am adept at
          translating complex technology into practical applications for
          diverse clients.
        </p>
      </section>
      <section>
        <h3 className="text-xl font-semibold">Experience</h3>
        {/* Add your experience details here */}
      </section>
      <section>
        <h3 className="text-xl font-semibold">Education</h3>
        {/* Add your education details here */}
      </section>
      <section>
        <h3 className="text-xl font-semibold">Skills</h3>
        {/* Add your skills details here */}
      </section>
      <section>
        <h3 className="text-xl font-semibold">Honors & Awards</h3>
        {/* Add your honors and awards details here */}
      </section>
    </div>
  );
};

export default Resume;