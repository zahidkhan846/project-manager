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
          <Loader type="Oval" color="#F3160E" height={100} width={100} />
          <h3 style={{ color: "#F3160E" }}>Loading...</h3>
        </div>
      )}
    </div>
  );
}

export default ProjectList;
