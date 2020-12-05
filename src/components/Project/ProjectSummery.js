import React from "react";
import { Link } from "react-router-dom";

function ProjectSummery({ project }) {
  const { id, title } = project;

  return (
    <Link to={`project/${id}`}>
      <div className="project-list section">
        <div className="card pink lighten-1">
          <div className="card-content white-text">
            <span className="card-title">{title}</span>
            <p>Created by Zahid Khan</p>
            <p>on 3rd of November</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default ProjectSummery;
