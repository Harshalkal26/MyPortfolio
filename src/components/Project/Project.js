import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div className="webdev">
        <h3>Web Development</h3>
        <div className="Project1">
          <div className="Pdetail">
            <div className="projecttop">
              <h4>E Commerce Website</h4>
              <a
                href="https://github.com/Harshalkal26/E-commerce-Website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="video">Video/Code</button>
              </a>
            </div>

            <ul>
              <li>
                E-commerce website specializing in renowned sneaker brands.
              </li>
              <li>
                Incorporates HTML, CSS, and JavaScript for the core
                technologies.
              </li>
              <li>
                Highlights a curated selection of popular sneaker brands,
                enhancing the shopping experience.
              </li>
              <li>
                Includes a payment component, facilitating secure and seamless
                transactions.
              </li>
              <li>
                Integrates technology stack to create a visually appealing and
                functional platform for users.
              </li>
            </ul>
          </div>
        </div>
        <div className="Project2">
          <div className="Pdetail">
            <div className="projecttop">
              <h4>Crypto Web App</h4>
              <a
                href="https://github.com/Harshalkal26/Crypto-Web-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="video">Video/Code</button>
              </a>
            </div>

            <ul>
              <li>
                It is a React-based website for seamless tracking of
                cryptocurrency exchange rates.
              </li>
              <li>
                It contain User-friendly authentication system necessitating
                registration for access.
              </li>
              <li>
                Secure login post-registration enhances overall user experience.
              </li>
              <li>
                Emphasis on real-time monitoring and staying informed about
                cryptocurrency market trends
              </li>
              <li>
                Supporting Technologies include HTML, CSS, JavaScript, React,
                MongoDB,Express,Nodejs and API.
              </li>
            </ul>
          </div>
        </div>

        <div className="Project4">
          <div className="Pdetail">
            <div className="projecttop">
              <h4>Chat Web App</h4>
              <a
                href="https://github.com/Harshalkal26/Chat-Web-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="video">Video/Code</button>
              </a>
            </div>
            <ul>
              <li>
                Developed a local chat web application enabling real-time
                communication on localhost:3000.
              </li>
              <li>
                Implemented basic chat features using socket.io to facilitate
                instant messaging between users.
              </li>
              <li>
                Utilized React for the frontend, creating a responsive and
                interactive user interface.
              </li>
              <li>
                Demonstrated proficiency in web development by integrating
                socket.io for real-time communication.
              </li>
              <li>
                Enhanced user experience with a simple and effective platform
                for local communication.
              </li>
            </ul>
          </div>
        </div>

        <div className="Project5">
          <div className="Pdetail">
            <div className="projecttop">
              <h4>Keeper Web App</h4>
              <a
                href="https://github.com/Harshalkal26/Keeper-Web-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="video">Video/Code</button>
              </a>
            </div>
            <ul>
              <li>
                Developed and implemented a Keeper web application with MongoDB,
                Node.js, React, and Express in a full-stack environment.
              </li>
              <li>
                Created a dynamic platform for users to store and manage to-do
                lists, essential information, and texts efficiently.
              </li>
              <li>
                Utilized MongoDB for seamless data storage and retrieval,
                ensuring a smooth user experience.
              </li>
              <li>
                Employed Node.js and Express to power the backend, providing
                robust server-side functionality.
              </li>
              <li>
                Crafted a responsive and intuitive user interface using React
                for the frontend, showcasing expertise in full-stack development
                and user-friendly design.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
