import React from "react";

const Experience = () => {
  return (
    <section>
      <h2 className="section-title">Experience</h2>
      <div className="mb-4">
        <h3 className="job-title">Software Engineer (SWE)</h3>
        <p className="company-name"><em>HTD Talent</em></p>
        <p className="job-duration"><em>Jul 2024 - Present</em></p>
        <ul className="job-list">
          <li className="job-list-item" key="htd-training"><strong>Training:</strong> Delivered two intensive 5-week programs on Java, OOP, SQL, Docker, and MVC.</li>
          <li className="job-list-item" key="htd-projects"><strong>Projects:</strong> Developed a versatile reservation system and a comprehensive full-stack website.</li>
          <li className="job-list-item" key="htd-deployment"><strong>Deployment:</strong> Successfully deployed tailored software solutions to client sites.</li>
          <li className="job-list-item" key="htd-impact"><strong>Impact:</strong> Leveraged advanced skills to drive significant improvements in client projects.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="job-title">Software Development Engineer</h3>
        <p className="company-name"><em>Amazon</em></p>
        <p className="job-duration"><em>Aug 2021 - Jul 2022</em></p>
        <ul className="job-list">
          <li className="job-list-item" key="amazon-development"><strong>Development:</strong> Enhanced Collections Workbench using Java, Python, and Bash scripts.</li>
          <li className="job-list-item" key="amazon-integration"><strong>Integration:</strong> Connected AWS services with billing and finance teams for seamless data access.</li>
          <li className="job-list-item" key="amazon-maintenance"><strong>Maintenance:</strong> Continuously deployed and maintained critical finance automation tools.</li>
          <li className="job-list-item" key="amazon-impact"><strong>Impact:</strong> Improved efficiency in finance operations and customer data accessibility.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="job-title">Software Engineer</h3>
        <p className="company-name"><em>Tata Consultancy Services</em></p>
        <p className="job-duration"><em>Feb 2021 - Jul 2022</em></p>
        <ul className="job-list">
          <li className="job-list-item" key="tcs-consulting"><strong>Consulting:</strong> Provided expert software engineering consultancy for diverse client projects.</li>
          <li className="job-list-item" key="tcs-development"><strong>Development:</strong> Designed and implemented solutions using Java and SQL.</li>
          <li className="job-list-item" key="tcs-optimization"><strong>Optimization:</strong> Achieved a 20% reduction in processing time through system enhancements.</li>
          <li className="job-list-item" key="tcs-collaboration"><strong>Collaboration:</strong> Improved client satisfaction by 25% with tailored solutions.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="job-title">Web Developer</h3>
        <p className="company-name"><em>Knowt</em></p>
        <p className="job-duration"><em>Jul 2019 - Apr 2020</em></p>
        <ul className="job-list">
          <li className="job-list-item" key="knowt-development"><strong>Development:</strong> Developed and optimized Knowt’s website and web application using React and Node.js.</li>
          <li className="job-list-item" key="knowt-uiux"><strong>UI/UX Enhancement:</strong> Improved UI design, leading to a 30% increase in user engagement.</li>
          <li className="job-list-item" key="knowt-platform"><strong>Platform Improvement:</strong> Revamped teacher platform functionality and reduced load times by 25%.</li>
          <li className="job-list-item" key="knowt-collaboration"><strong>Collaboration:</strong> Ensured seamless feature integration with the design team.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="job-title">Information Technology Consultant</h3>
        <p className="company-name"><em>Rutgers Office of Information Technology</em></p>
        <p className="job-duration"><em>Mar 2018 - Dec 2018</em></p>
        <ul className="job-list">
          <li className="job-list-item" key="rutgers-support"><strong>Technical Support:</strong> Provided comprehensive support, resolving 95% of issues.</li>
          <li className="job-list-item" key="rutgers-troubleshooting"><strong>Troubleshooting:</strong> Diagnosed and fixed hardware/software problems, improving lab efficiency by 20%.</li>
          <li className="job-list-item" key="rutgers-management"><strong>Lab Management:</strong> Managed computer labs with 100% equipment uptime and user satisfaction.</li>
          <li className="job-list-item" key="rutgers-maintenance"><strong>Maintenance:</strong> Extended equipment lifespan by 15% through regular maintenance.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="job-title">Application Developer</h3>
        <p className="company-name"><em>Innovyt</em></p>
        <p className="job-duration"><em>May 2018 - Aug 2018</em></p>
        <ul className="job-list">
          <li className="job-list-item" key="innovyt-research"><strong>Blockchain Research:</strong> Investigated blockchain technology for innovative solutions.</li>
          <li className="job-list-item" key="innovyt-backend"><strong>Backend Development:</strong> Built and optimized OilChain’s backend using Node.js and WebSocket.</li>
          <li className="job-list-item" key="innovyt-api"><strong>API Implementation:</strong> Developed a robust API with Express, ensuring seamless data interaction.</li>
          <li className="job-list-item" key="innovyt-testing"><strong>Testing:</strong> Implemented unit tests with Jest, enhancing application reliability.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="job-title">Lab Researcher</h3>
        <p className="company-name"><em>Evolutionary Ecology Lab</em></p>
        <p className="job-duration"><em>May 2017 - Sep 2017</em></p>
        <ul className="job-list">
          <li className="job-list-item" key="lab-field"><strong>Field Research:</strong> Collected samples for studies on plant species and analyzed data.</li>
          <li className="job-list-item" key="lab-propagation"><strong>Propagation Techniques:</strong> Assisted with plant propagation and applied growth hormones.</li>
          <li className="job-list-item" key="lab-experimental"><strong>Experimental Contributions:</strong> Supported key research objectives in plant growth studies.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;