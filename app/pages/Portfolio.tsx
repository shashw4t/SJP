import React from "react";


const Portfolio = () => {
  return (
    <section className="portfolio-section p-6 bg-gray-100 min-h-screen">
      <h2 className="portfolio-title text-4xl font-bold mb-6 text-center">Portfolio</h2>
      <div className="portfolio-item mb-6 p-4 bg-white shadow-md rounded-lg">
        <h3 className="portfolio-item-title text-2xl font-semibold">Don’t Wreck My House (DWMH)</h3>
        <p className="portfolio-item-subtitle text-lg italic mb-4">
          Architected and developed a comprehensive project management system to streamline the management of guest reservations for hosts. Leveraging Java and JUnit for robust functionality, the system significantly improved operational efficiency and reduced booking errors.
        </p>
        <ul className="portfolio-item-list list-disc list-inside">
          <li><strong>Key Features:</strong></li>
          <li>Developed a user-friendly interface for managing reservations.</li>
          <li>Implemented robust backend services using Java.</li>
          <li>Conducted extensive testing using JUnit to ensure reliability.</li>
          <li><strong>Impact:</strong> Improved operational efficiency and reduced booking errors by 30%.</li>
          <li><strong>Languages/Frameworks:</strong> Java, JUnit</li>
          <li><a href="https://github.com/shashw4t/DWMH" className="text-blue-500">View on GitHub</a></li>
        </ul>
      </div>
      <div className="portfolio-item mb-6 p-4 bg-white shadow-md rounded-lg">
        <h3 className="portfolio-item-title text-2xl font-semibold">Predict Future Sales (Kaggle)</h3>
        <p className="portfolio-item-subtitle text-lg italic mb-4">
          Deployed advanced machine learning models, including Random Forest and XGBoost, to accurately forecast future sales. Through rigorous model optimization, I achieved a Mean Absolute Error (MAE) of 0.19, enabling better inventory planning and demand forecasting.
        </p>
        <ul className="portfolio-item-list list-disc list-inside">
          <li><strong>Key Features:</strong></li>
          <li>Implemented data preprocessing and feature engineering.</li>
          <li>Trained and optimized Random Forest and XGBoost models.</li>
          <li>Achieved a competitive MAE of 0.19.</li>
          <li><strong>Impact:</strong> Enabled better inventory planning and demand forecasting.</li>
          <li><strong>Languages/Frameworks:</strong> Python, Jupyter Notebook, Random Forest, XGBoost</li>
          <li><strong>Machine Learning Algorithms:</strong> Random Forest, XGBoost</li>
          <li><a href="https://github.com/shashw4t/sales-prediction" className="text-blue-500">View on GitHub</a></li>
        </ul>
      </div>
      <div className="portfolio-item mb-6 p-4 bg-white shadow-md rounded-lg">
        <h3 className="portfolio-item-title text-2xl font-semibold">Wikipedia Spark Analysis</h3>
        <p className="portfolio-item-subtitle text-lg italic mb-4">
          Analyzed full-text Wikipedia articles using Apache Spark. This project involved processing large datasets and performing various data analysis tasks using Spark’s powerful data processing capabilities.
        </p>
        <ul className="portfolio-item-list list-disc list-inside">
          <li><strong>Key Features:</strong></li>
          <li>Processed and analyzed large-scale text data.</li>
          <li>Utilized Spark for efficient data processing.</li>
          <li>Extracted meaningful insights from Wikipedia articles.</li>
          <li><strong>Impact:</strong> Demonstrated the ability to handle and analyze large datasets efficiently.</li>
          <li><strong>Languages/Frameworks:</strong> Scala, Apache Spark</li>
          <li><a href="https://github.com/shashw4t/Wikipedia-Spark-Analysis" className="text-blue-500">View on GitHub</a></li>
        </ul>
      </div>
      <div className="portfolio-item mb-6 p-4 bg-white shadow-md rounded-lg">
        <h3 className="portfolio-item-title text-2xl font-semibold">Blockchain Oil</h3>
        <p className="portfolio-item-subtitle text-lg italic mb-4">
          Developed a blockchain application for a commodity-based coin, specifically for oil. This project involved creating a decentralized application to manage and trade oil-based tokens using blockchain technology.
        </p>
        <ul className="portfolio-item-list list-disc list-inside">
          <li><strong>Key Features:</strong></li>
          <li>Designed and implemented a blockchain-based token system.</li>
          <li>Developed smart contracts for oil trading.</li>
          <li>Ensured secure and transparent transactions.</li>
          <li><strong>Impact:</strong> Provided a secure and transparent platform for trading oil-based tokens.</li>
          <li><strong>Languages/Frameworks:</strong> JavaScript, Blockchain</li>
          <li><a href="https://github.com/shashw4t/blockchain-oil" className="text-blue-500">View on GitHub</a></li>
        </ul>
      </div>
      <div className="portfolio-item mb-6 p-4 bg-white shadow-md rounded-lg">
        <h3 className="portfolio-item-title text-2xl font-semibold">NBA Data Analysis</h3>
        <p className="portfolio-item-subtitle text-lg italic mb-4">
          Implemented machine learning models to analyze NBA data. This project involved data preprocessing, feature engineering, and model training to derive insights from NBA statistics.
        </p>
        <ul className="portfolio-item-list list-disc list-inside">
          <li><strong>Key Features:</strong></li>
          <li>Collected and cleaned NBA data.</li>
          <li>Built predictive models to analyze player performance.</li>
          <li>Visualized data insights using Jupyter Notebook.</li>
          <li><strong>Impact:</strong> Provided valuable insights into player performance and game strategies.</li>
          <li><strong>Languages/Frameworks:</strong> Python, Jupyter Notebook</li>
          <li><strong>Machine Learning Algorithms:</strong> Linear Regression, Decision Trees</li>
          <li><a href="https://github.com/shashw4t/NBA-Data-Analysis" className="text-blue-500">View on GitHub</a></li>
        </ul>
      </div>
      <div className="portfolio-item mb-6 p-4 bg-white shadow-md rounded-lg">
        <h3 className="portfolio-item-title text-2xl font-semibold">SJP (Shash Job Portfolio)</h3>
        <p className="portfolio-item-subtitle text-lg italic mb-4">
          Developed a job portfolio application using TypeScript. This project showcases various job-related functionalities and serves as a comprehensive portfolio for potential employers.
        </p>
        <ul className="portfolio-item-list list-disc list-inside">
          <li><strong>Key Features:</strong></li>
          <li>Created a responsive web application.</li>
          <li>Integrated job search and application tracking features.</li>
          <li>Utilized modern web development practices.</li>
          <li><strong>Impact:</strong> Enhanced job search experience and application tracking for users.</li>
          <li><strong>Languages/Frameworks:</strong> TypeScript, React, Node.js</li>
          <li><a href="https://github.com/shashw4t/SJP" className="text-blue-500">View on GitHub</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;