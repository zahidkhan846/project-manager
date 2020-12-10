import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function ProjectDetails() {
  const projects = useSelector((state) => state.project.projects);
  const { id } = useParams();

  const project = projects.find((project) => {
    return project.id === id;
  });

  if (!project) {
    return (
      <div className="container">
        <h2>Can't find the Details...</h2>
        <h3>Plese select a project from the following link...</h3>
        <Link to="/" className="btn  orange darken-4">
          Project
        </Link>
      </div>
    );
  } else {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0 white">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
            <br />
            <hr />
            <p>
              Posted by {project.authorFirstName} {project.authorLastName}
            </p>
            <p>3rd November, 2020</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
