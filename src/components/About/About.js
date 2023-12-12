import React from "react";
import "./About.css";
import proflepic from "./IMG_20230214_220948-oval.png";
import reactlogo from "./icons8-react-16.png";
import expresslogo from "./icons8-express-js-50.png";
import nodelogo from "./icons8-node-js-48.png";
import bootstraplogo from "./icons8-bootstrap-logo-48.png";
import htmllogo from "./icons8-html-logo-48.png";
import csslogo from "./icons8-css-logo-48.png";
import clogo from "./icons8-c-programming-48.png";
import cpplogo from "./icons8-c++-48.png";
import sqllogo from "./icons8-sql-50.png";
import jslogo from "./icons8-javascript-48.png";
import pythonlogo from "./icons8-python-48.png";
const About = () => {
  return (
    <div className="eduimg">
      <div>
        <div className="educaton">
          <h2>Education</h2>
          <div className="college">
            <h3 style={{ color: "red" }}>
              Samrat Ashok Technological Institute Vidisha, M.P.
            </h3>
            <h4>Bachelor of Technology( 2019-2023)</h4>
            <h4>Electrical Engineering</h4>
            <p>Grade : 8.64 CGPA</p>
          </div>
        </div>

        <div>
          <h2>Experience</h2>
          <div className="experience">
            <h3 style={{ color: "red" }}>Sahu Technologies</h3>
            <ul>
              <li>
                Utilized a variety of machine learning algorithms for model
                development.
              </li>
              <li>
                Explored APIs to expand the model's functionality and data
                sources.
              </li>
              <li>
                Integrated APIs for smooth inclusion into the developer team's
                workflow, simplifying data retrieval and processing.
              </li>
              <li>
                Worked on supervised and unsupervised machine learning models.
              </li>
            </ul>
          </div>
        </div>

        <div className="skill">
          <h2>Skill</h2>
          <div className="skillsec">
            <h3 style={{ color: "red" }}>Languages</h3>
            <p>
              {" "}
              <a
                href="https://www.cprogramming.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img src={clogo} alt="c" width="40" height="40" />{" "}
              </a>{" "}
              <a
                href="https://www.w3schools.com/cpp/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src={cpplogo}
                  alt="cplusplus"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a
                href="https://www.w3schools.com/python/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src={pythonlogo}
                  alt="python"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a
                href="https://www.w3.org/html/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img src={htmllogo} alt="html5" width="40" height="40" />{" "}
              </a>{" "}
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img src={csslogo} alt="css3" width="40" height="40" />{" "}
              </a>{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src={jslogo}
                  alt="javascript"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
            </p>
          </div>
          <div className="skillsec">
            <h3 style={{ color: "red" }}>Tools/Familiar</h3>{" "}
            <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
              {" "}
              <img
                src={bootstraplogo}
                alt="bootstrap"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://expressjs.com" target="_blank" rel="noreferrer">
              {" "}
              <img
                src={expresslogo}
                alt="express"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
              {" "}
              <img src={sqllogo} alt="mysql" width="40" height="40" />{" "}
            </a>{" "}
            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
              {" "}
              <img src={nodelogo} alt="nodejs" width="40" height="40" />{" "}
            </a>{" "}
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              {" "}
              <img src={reactlogo} alt="react" width="40" height="40" />{" "}
            </a>{" "}
          </div>
        </div>

        <div className="achievements">
          <h2>Achievements</h2>
          <ul className="Achiveit">
            <li>
              Awarded by SCALER for participating in National Level Coding
              Contest held on Feb 6,2022.
            </li>
            <li>Secured GLOBAL RANK of ‘63’ in SNACKDOWN 2021(ROUND-1A).</li>
            <li>Solved 300+ problems on Geeks for Geeks.</li>
            <li>Achieved a 3-star rating in Code Chef competitions.</li>
          </ul>
        </div>

        <div className="positions">
          <h2>Positions</h2>
          <ul className="postn">
            <li>Training and Placement Cell Member.</li>
            <li>
              Member of Developer Student Club (By Google) of our college.
            </li>
            <li>Worked as a subject-matter expert for Chegg.</li>
            <li>
              Conducted virtual programming quiz as a member of Academic society
              of college.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img src={proflepic} alt="ProfilePic" className="profilepic" />
      </div>
    </div>
  );
};

export default About;
