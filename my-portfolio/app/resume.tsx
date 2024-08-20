// Resume.tsx
import React from "react";

const Resume = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">Shashwat Singh</h1>
      <p><strong>Email:</strong> [hidden]</p>
      <p><strong>Phone:</strong> [hidden]</p>
      <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/shashwat">linkedin.com/in/shashwat</a></p>

      <hr className="my-4" />

      <section>
        <h2 className="text-2xl font-bold mb-2">Summary</h2>
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

      <hr className="my-4" />

      <section>
        <h2 className="text-2xl font-bold mb-2">Experience</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Software Engineer (SWE)</h3>
          <p><em>HTD Talent</em></p>
          <p><em>Jul 2024 - Present</em></p>
          <ul className="list-disc list-inside">
            <li><strong>Training:</strong> Delivered two intensive 5-week programs on Java, OOP, SQL, Docker, and MVC.</li>
            <li><strong>Projects:</strong> Developed a versatile reservation system and a comprehensive full-stack website.</li>
            <li><strong>Deployment:</strong> Successfully deployed tailored software solutions to client sites.</li>
            <li><strong>Impact:</strong> Leveraged advanced skills to drive significant improvements in client projects.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Software Development Engineer</h3>
          <p><em>Amazon</em></p>
          <p><em>Aug 2021 - Jul 2022</em></p>
          <ul className="list-disc list-inside">
            <li><strong>Development:</strong> Enhanced Collections Workbench using Java, Python, and Bash scripts.</li>
            <li><strong>Integration:</strong> Connected AWS services with billing and finance teams for seamless data access.</li>
            <li><strong>Maintenance:</strong> Continuously deployed and maintained critical finance automation tools.</li>
            <li><strong>Impact:</strong> Improved efficiency in finance operations and customer data accessibility.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Software Engineer</h3>
          <p><em>Tata Consultancy Services</em></p>
          <p><em>Feb 2021 - Jul 2022</em></p>
          <ul className="list-disc list-inside">
            <li><strong>Consulting:</strong> Provided expert software engineering consultancy for diverse client projects.</li>
            <li><strong>Development:</strong> Designed and implemented solutions using Java and SQL.</li>
            <li><strong>Optimization:</strong> Achieved a 20% reduction in processing time through system enhancements.</li>
            <li><strong>Collaboration:</strong> Improved client satisfaction by 25% with tailored solutions.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Web Developer</h3>
          <p><em>Knowt</em></p>
          <p><em>Jul 2019 - Apr 2020</em></p>
          <ul className="list-disc list-inside">
            <li><strong>Development:</strong> Developed and optimized Knowt’s website and web application using React and Node.js.</li>
            <li><strong>UI/UX Enhancement:</strong> Improved UI design, leading to a 30% increase in user engagement.</li>
            <li><strong>Platform Improvement:</strong> Revamped teacher platform functionality and reduced load times by 25%.</li>
            <li><strong>Collaboration:</strong> Ensured seamless feature integration with the design team.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Information Technology Consultant</h3>
          <p><em>Rutgers Office of Information Technology</em></p>
          <p><em>Mar 2018 - Dec 2018</em></p>
          <ul className="list-disc list-inside">
            <li><strong>Technical Support:</strong> Provided comprehensive support, resolving 95% of issues.</li>
            <li><strong>Troubleshooting:</strong> Diagnosed and fixed hardware/software problems, improving lab efficiency by 20%.</li>
            <li><strong>Lab Management:</strong> Managed computer labs with 100% equipment uptime and user satisfaction.</li>
            <li><strong>Maintenance:</strong> Extended equipment lifespan by 15% through regular maintenance.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Application Developer</h3>
          <p><em>Innovyt</em></p>
          <p><em>May 2018 - Aug 2018</em></p>
          <ul className="list-disc list-inside">
            <li><strong>Blockchain Research:</strong> Investigated blockchain technology for innovative solutions.</li>
            <li><strong>Backend Development:</strong> Built and optimized OilChain’s backend using Node.js and WebSocket.</li>
            <li><strong>API Implementation:</strong> Developed a robust API with Express, ensuring seamless data interaction.</li>
            <li><strong>Testing:</strong> Implemented unit tests with Jest, enhancing application reliability.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Lab Researcher</h3>
          <p><em>Evolutionary Ecology Lab</em></p>
          <p><em>May 2017 - Sep 2017</em></p>
          <ul className="list-disc list-inside">
            <li><strong>Field Research:</strong> Collected samples for studies on plant species and analyzed data.</li>
            <li><strong>Propagation Techniques:</strong> Assisted with plant propagation and applied growth hormones.</li>
            <li><strong>Experimental Contributions:</strong> Supported key research objectives in plant growth studies.</li>
          </ul>
        </div>
      </section>

      <hr className="my-4" />

      <section>
        <h2 className="text-2xl font-bold mb-2">Education</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">New Jersey Institute of Technology</h3>
          <p><em>Master&rsquo;s Degree, Data Science</em></p>
          <p><em>Sep 2022 - Sep 2023</em></p>
          <ul className="list-disc list-inside">
            <li>Specialized in data analysis, machine learning, and statistical modeling.</li>
            <li>Gained expertise in Python, R, SQL, and advanced data visualization techniques.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Rutgers University</h3>
          <p><em>Bachelor&rsquo;s Degree, Computer Science</em></p>
          <p><em>2016 - 2020</em></p>
          <ul className="list-disc list-inside">
            <li>Foundation in algorithms, data structures, and web development.</li>
            <li>Hands-on experience in Java, Python, and various software projects.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">East Brunswick High School</h3>
          <p><em>High School Diploma</em></p>
          <p><em>2012 - 2016</em></p>
        </div>
      </section>

      <hr className="my-4" />

      <section>
        <h2 className="text-2xl font-bold mb-2">Skills</h2>
        <ul className="list-disc list-inside">
          <li>CI/CD</li>
          <li>Python</li>
          <li>SQL</li>
          <li>PyTorch</li>
          <li>Apache Spark</li>
          <li>Microsoft Power BI</li>
          <li>AWS</li>
          <li>Microsoft Azure</li>
          <li>GitHub</li>
          <li>Docker</li>
        </ul>
      </section>

      <hr className="my-4" />

      <section>
        <h2 className="text-2xl font-bold mb-2">Honors & Awards</h2>
        <ul className="list-disc list-inside">
          <li><strong>1st Place - Center for Civic Education</strong> <em>Jan 2016</em> Winner of the New Jersey We the People States Competition.</li>
          <li><strong>Dean&apos;s List - Rutgers University School of Arts and Science</strong> <em>Dec 2016</em></li>
          <li><strong>10th Place - Center for Civic Education</strong> <em>Dec 2016</em> Achieved tenth place at the We The People National Competition.</li>
          <li><strong>AP Scholar with Distinction - College Board</strong> <em>Apr 2016</em></li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;