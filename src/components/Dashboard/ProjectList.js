import React from "react";
import { Link } from "react-router-dom";
import ProjectSummery from "./../Project/ProjectSummery";

function ProjectList({ projects }) {
  return (
    <div className="project-list section">
      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectSummery project={project} key={project.id} />
        ))
      ) : (
        <>
          <h3>There are no project to return!</h3>
          <br />
          <h4>Create New Project</h4>
          <br />
          <h5>
            <Link className="btn" to="/new-project">
              Click Here
            </Link>
          </h5>
        </>
      )}
    </div>
  );
}

export default ProjectList;
