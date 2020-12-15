import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProjectsStart } from "../../store/Actions/projects";

function ProjectDetails() {
  const projects = useSelector((state) => state.project.projects);
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjectsStart());
  }, [dispatch]);

  const project = projects.find((project) => {
    return project.id === id;
  });

  if (!project) {
    return (
      <div className="page-layout">
        <div className="loader center">
          <Loader type="Oval" color="#F3160E" height={100} width={100} />
          <h3 style={{ color: "#F3160E" }}>Loading...</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="page-layout">
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
      </div>
    );
  }
}

export default ProjectDetails;
