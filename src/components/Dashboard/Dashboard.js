import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectsStart } from "../../store/Actions/projects";
import Notfication from "./Notfication";
import ProjectList from "./ProjectList";

function Dashboard() {
  const projects = useSelector((state) => state.project.projects);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjectsStart());
  }, [dispatch]);

  return (
    <div className="page-layout">
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notfication />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
