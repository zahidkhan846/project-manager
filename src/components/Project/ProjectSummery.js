import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

function ProjectSummery({ project }) {
  const { id, title, authorFirstName, authorLastName, createdDate } = project;

  return (
    <Link to={`project/${id}`}>
      <div className="project-list section">
        <div className="card">
          <div className="card-content black-text">
            <span className="card-title">{title}</span>
            <p>
              Created by {authorFirstName} {authorLastName}
            </p>
            <p>on {moment(createdDate && createdDate.toDate()).calendar()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default ProjectSummery;
