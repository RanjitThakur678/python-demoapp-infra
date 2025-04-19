// src/pages/Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>PikoFern - Home</title>
        <meta name="description" content="PikoFern is a tech solutions provider covering Web Dev, GenAI, Cloud, Security, and more." />
      </Helmet>

      <header>
        <h1>Welcome to PikoFern.In</h1>
        <p>
          We are a Tech Solution provider. We are a group of highly enthusiastic tech experts who want to help people adopt new technologies.
        </p>
      </header>

      <section>
        <h2>Our Domains of Expertise</h2>
        <ul>
          <li>
            <div className="domain-card">
              <strong>Web Development</strong>
              <ul>
                <li>Node.js</li>
                <li>Go</li>
                <li>Java</li>
                <li>Angular</li>
                <li>Next.js</li>
                <li>Express</li>
              </ul>
            </div>
          </li>
          <li>
            <div className="domain-card">
              <strong>System Design</strong>
              <ul>
                <li>Architectures: Serverless, Monolithic, Microservices, Distributed Systems</li>
                <li>API Design & Gateways</li>
                <li>Database Sharding</li>
                <li>Fault Tolerance & High Availability</li>
                <li>Content Delivery Networks (CDNs)</li>
              </ul>
            </div>
          </li>
          <li>
            <div className="domain-card">
              <strong>Data Analytics</strong>
              <ul>
                <li>Data Visualization (Tableau, PowerBI)</li>
                <li>Big Data Processing (Hadoop, Spark)</li>
                <li>ETL Pipelines</li>
                <li>Machine Learning (TensorFlow, Scikit-Learn)</li>
                <li>Data Warehousing</li>
                <li>SQL & NoSQL Databases</li>
                <li>Predictive Analytics</li>
                <li>Real-time Analytics</li>
              </ul>
            </div>
          </li>
          <li>
            <div className="domain-card">
              <strong>GenAI Modeling</strong>
              <ul>
                <li>Natural Language Processing (NLP)</li>
                <li>Generative Models (GANs, VAEs)</li>
                <li>Transformers (GPT, BERT, T5)</li>
                <li>Reinforcement Learning</li>
                <li>AI Ethics & Bias Mitigation</li>
                <li>Image Recognition</li>
                <li>Deep Learning Frameworks (PyTorch, TensorFlow)</li>
              </ul>
            </div>
          </li>
          <li>
            <div className="domain-card">
              <strong>Cloud Computing</strong>
              <ul>
                <li>Amazon Web Services (AWS)</li>
                <li>Microsoft Azure</li>
                <li>Google Cloud Platform (GCP)</li>
              </ul>
            </div>
          </li>
          <li>
            <div className="domain-card">
              <strong>Security</strong>
              <ul>
                <li>Secure Coding Practices</li>
                <li>Web Application Security (OWASP)</li>
                <li>Network Security</li>
                <li>Intrusion Detection Systems (IDS)</li>
                <li>Firewalls & VPNs</li>
              </ul>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
