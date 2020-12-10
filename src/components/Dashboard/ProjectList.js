import React from "react";
import ProjectSummery from "./../Project/ProjectSummery";
import Loader from "react-loader-spinner";

function ProjectList({ projects }) {
  return (
    <div className="project-list section">
      {projects.length > 0 ? (
        projects.map((project) => {
          return <ProjectSummery project={project} key={project.id} />;
        })
      ) : (
        <div className="loader center">
          <Loader type="Oval" color="#0c3666" height={100} width={100} />
          <h3>Loading...</h3>
        </div>
      )}
    </div>
  );
}

export default ProjectList;
