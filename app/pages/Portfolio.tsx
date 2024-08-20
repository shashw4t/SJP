import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="portfolio-item">
        <h3 className="portfolio-item-title">Don’t Wreck My House (DWMH)</h3>
        <p className="portfolio-item-subtitle"><em>Architected and developed a comprehensive project management system to streamline the management of guest reservations for hosts. Leveraging Java and JUnit for robust functionality, the system significantly improved operational efficiency and reduced booking errors.</em></p>
        <ul className="portfolio-item-list">
          <li><strong>Key Features:</strong></li>
          <li>Developed a user-friendly interface for managing reservations.</li>
          <li>Implemented robust backend services using Java.</li>
          <li>Conducted extensive testing using JUnit to ensure reliability.</li>
          <li><strong>Impact:</strong> Improved operational efficiency and reduced booking errors by 30%.</li>
          <li><strong>Languages/Frameworks:</strong> Java, JUnit</li>
          <li><a href="https://github.com/shashw4t/DWMH">View on GitHub</a></li>
        </ul>
      </div>
      <div className="portfolio-item">
        <h3 className="portfolio-item-title">Predict Future Sales (Kaggle)</h3>
        <p className="portfolio-item-subtitle"><em>Deployed advanced machine learning models, including Random Forest and 
          XGBoost, to accurately forecast future sales. Through rigorous model optimization, 
          I achieved a Mean Absolute Error (MAE) of 0.19, enabling better inventory planning and demand forecasting.</em></p>
        <ul className="portfolio-item-list">
          <li><strong>Key Features:</strong></li>
          <li>Implemented data preprocessing and feature engineering.</li>
          <li>Trained and optimized Random Forest and XGBoost models.</li>
          <li>Achieved a competitive MAE of 0.19.</li>
          <li><strong>Impact:</strong> Enabled better inventory planning and demand forecasting.</li>
          <li><strong>Languages/Frameworks:</strong> Python, Jupyter Notebook, Random Forest, XGBoost</li>
          <li><strong>Machine Learning Algorithms:</strong> Random Forest, XGBoost</li>
          <li><a href="https://github.com/shashw4t/sales-prediction">View on GitHub</a></li>
        </ul>
      </div>
      <div className="portfolio-item">
        <h3 className="portfolio-item-title">Wikipedia Spark Analysis</h3>
        <p className="portfolio-item-subtitle"><em>
          Analyzed full-text Wikipedia articles using Apache Spark. 
          This project involved processing large datasets and performing various data analysis tasks using Spark&rsquo;s
           powerful data processing capabilities.</em></p>
        <ul className="portfolio-item-list">
          <li><strong>Key Features:</strong></li>
          <li>Processed and analyzed large-scale text data.</li>
          <li>Utilized Spark for efficient data processing.</li>
          <li>Extracted meaningful insights from Wikipedia articles.</li>
          <li><strong>Impact:</strong> Demonstrated the ability to handle and analyze large datasets efficiently.</li>
          <li><strong>Languages/Frameworks:</strong> Scala, Apache Spark</li>
          <li><a href="https://github.com/shashw4t/Wikipedia-Spark-Analysis">View on GitHub</a></li>
        </ul>
      </div>
      <div className="portfolio-item">
        <h3 className="portfolio-item-title">Blockchain Oil</h3>
        <p className="portfolio-item-subtitle"><em>Developed a blockchain application for a commodity-based coin, specifically for oil. This project involved creating a decentralized application to manage and trade oil-based tokens using blockchain technology.</em></p>
        <ul className="portfolio-item-list">
          <li><strong>Key Features:</strong></li>
          <li>Designed and implemented a blockchain-based token system.</li>
          <li>Developed smart contracts for oil trading.</li>
          <li>Ensured secure and transparent transactions.</li>
          <li><strong>Impact:</strong> Provided a secure and transparent platform for trading oil-based tokens.</li>
          <li><strong>Languages/Frameworks:</strong> JavaScript, Blockchain</li>
          <li><a href="https://github.com/shashw4t/blockchain-oil">View on GitHub</a></li>
        </ul>
      </div>
      <div className="portfolio-item">
        <h3 className="portfolio-item-title">NBA Data Analysis</h3>
        <p className="portfolio-item-subtitle"><em>Implemented machine learning models to analyze NBA data. This project involved data preprocessing, feature engineering, and model training to derive insights from NBA statistics.</em></p>
        <ul className="portfolio-item-list">
          <li><strong>Key Features:</strong></li>
          <li>Collected and cleaned NBA data.</li>
          <li>Built predictive models to analyze player performance.</li>
          <li>Visualized data insights using Jupyter Notebook.</li>
          <li><strong>Impact:</strong> Provided valuable insights into player performance and game strategies.</li>
          <li><strong>Languages/Frameworks:</strong> Python, Jupyter Notebook</li>
          <li><strong>Machine Learning Algorithms:</strong> Linear Regression, Decision Trees</li>
          <li><a href="https://github.com/shashw4t/NBA-Data-Analysis">View on GitHub</a></li>
        </ul>
      </div>
      <div className="portfolio-item">
        <h3 className="portfolio-item-title">SJP (Shash Job Portfolio)</h3>
        <p className="portfolio-item-subtitle"><em>Developed a job portfolio application using TypeScript. This project showcases various job-related functionalities and serves as a comprehensive portfolio for potential employers.</em></p>
        <ul className="portfolio-item-list">
          <li><strong>Key Features:</strong></li>
          <li>Created a responsive web application.</li>
          <li>Integrated job search and application tracking features.</li>
          <li>Utilized modern web development practices.</li>
          <li><strong>Impact:</strong> Enhanced job search experience and application tracking for users.</li>
          <li><strong>Languages/Frameworks:</strong> TypeScript, React, Node.js</li>
          <li><a href="https://github.com/shashw4t/SJP">View on GitHub</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;