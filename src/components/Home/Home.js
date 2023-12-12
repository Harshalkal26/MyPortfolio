import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <main className="home">
        <div className="intro">
          <h3 className="welcome">Welcome To My Portfolio</h3>
          <p className="myintro">
            I am a passionate software engineer with a deep expertise in C, C++,
            Machine Learning, and MERN Stack development. Through my experience
            in competitive programming, I have honed strong problem-solving
            skills. I excel in building robust web applications, delivering
            efficient code, and thriving in agile development environments.
            Continuously learning and staying updated with emerging
            technologies, I am actively seeking challenging opportunities to
            leverage my skillset and contribute to impactful projects.
          </p>
          <p className="myintro">
            Let's connect and explore how we can collaborate on innovative
            solutions.
          </p>
          <div className="myintrolink">
            <Link to="/project">
              <button className="projectlink">Project</button>
            </Link>

            <a
              href="https://techlenschronicles.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="blog">Blog</button>
            </a>
          </div>
        </div>
        <div className="img">
          <img src="https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2417.jpg"></img>
        </div>
      </main>
    </div>
  );
};

export default Home;
