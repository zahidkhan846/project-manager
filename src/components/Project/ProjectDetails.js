import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProjectDetails() {
  const projects = useSelector((state) => state.project.projects);
  const { id } = useParams();

  const project = projects.find((project) => {
    return project.id === id;
  });

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{project.title}</span>
          <p>{project.content}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Zahid Khan</div>
          <div>3rd November, 2020</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
