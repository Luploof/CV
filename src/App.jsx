import React, { useState } from "react";
import "./App.css";
import profilePic from "./IMG/profile.jpg";
import todolist from "/gif/todolist.gif";
import api from "/gif/api.gif";
import lamoda from "/gif/lamoda.gif";
import landing from "/gif/landing.gif";
import "font-awesome/css/font-awesome.min.css";

const projects = [
  {
    title: "ToDoList",
    description:
      "The task management application inspired by Todoist has been successfully developed using React.js and Vite. Users can create and delete tasks with attributes such as title, date, and priority.",
    gif: todolist,
    repoLink: "https://luploof.github.io/list/",
  },
  {
    title: "API&SPA",
    description:
      "A multi-page application built with React, utilizing the react-router-dom library for routing and an external API to fetch user data. The application allows users to view a list of all users as well as the details of each user and their album.",
    gif: api,
    repoLink: "https://luploof.github.io/API/",
  },
  {
    title: "LaModa",
    description:
      "The LaModa project is a modern online store developed using Vite and React.js technologies. The goal of the project is to provide users with a convenient and intuitive interface for purchasing products, as well as the ability to filter and sort items by various parameters.",
    gif: lamoda,
    repoLink: "https://luploof.github.io/LaModa/",
  },
  {
    title: "Landing Page Design",
    description:
      "This design, created by me, immerses you in the tranquil atmosphere of charming flower shop. Soft lavender hues highlight the exquisite floral arrangements.",
    gif: landing,
    repoLink:
      "https://www.figma.com/proto/6LOx4pZ4eg0F9HsC25TCJT/Untitled?node-id=1-2&t=8TChBxwnPc0n5mdD-1",
  },
];

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="container">
      <header className="header">
        <img
          src={profilePic}
          alt="Profile"
          className="profile-pic-header"
          onClick={toggleModal}
        />
        <div className="header-info">
          <span className="name">Yulia Krivetskaya</span>
        </div>
        <div className="socials-header">
          <a
            href="mailto:luploof@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
          <a
            href="https://t.me/luploof"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-telegram" aria-hidden="true"></i>
          </a>
          <a
            href="https://github.com/Luploof"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </header>

      <main>
        <section className="about">
          <div className="description">
            <h2>Education</h2>
            <p>BSU, Faculty of Mechanics and Mathematics</p>
            <p>Student, 2023 – Present</p>

            <h2>Work Experience</h2>
            <p>Freelance Developer</p>
            <p>
              Development of web applications using JavaScript, HTML, CSS.
              <br />
              Interface design in Figma.
              <br />
              Working with MySQL databases.
              <br />
              Implemented software solutions using C++ for performance-critical
              applications.
              <br />
              Developed backend systems and applications in Java, focusing on
              scalability and maintainability.
            </p>
          </div>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <div className="skills-container">
            <div className="skill-badge">C++</div>
            <div className="skill-badge">Java</div>
            <div className="skill-badge">HTML/CSS</div>
            <div className="skill-badge">JavaScript</div>
            <div className="skill-badge">Figma</div>
            <div className="skill-badge">MySQL</div>
          </div>
          <div className="languages-container">
            <div className="skill-badge">Russian (Native)</div>
            <div className="skill-badge">English (B2)</div>
            <div className="skill-badge">Polish (B1)</div>
          </div>
        </section>

        <section className="portfolio">
          <h2>Portfolio</h2>
          <div className="projects">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <img
                  src={project.gif}
                  alt={project.title}
                  className="project-gif"
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-link"
                >
                  {project.title === "Landing Page Design" ? (
                    <>
                      <i className="fa fa-link" aria-hidden="true"></i> Figma
                      Link
                    </>
                  ) : (
                    <>
                      <i className="fa fa-github" aria-hidden="true"></i>{" "}
                      Repository Link
                    </>
                  )}
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="socials-footer">
          <a
            href="mailto:luploof@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
          <a
            href="https://t.me/luploof"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-telegram" aria-hidden="true"></i>
          </a>
          <a
            href="https://github.com/Luploof"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </footer>

      {isModalOpen && (
        <div className="modal" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <img src={profilePic} alt="Profile" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
