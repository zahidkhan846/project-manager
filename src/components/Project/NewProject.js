import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createNewProject } from "./../../store/Actions/projects";
import { AuthContext } from "../../context/AuthContext";

function NewProject() {
  const { currentUser } = useContext(AuthContext);
  const { uid } = currentUser;

  const dispatch = useDispatch();

  const onCreateNewProject = (project) => dispatch(createNewProject(project));

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorFirstName, setAuthorFirstName] = useState("");
  const [authorLastName, setAuthorLastName] = useState("");

  const history = useHistory();

  const handleSingUpSubmit = (e) => {
    e.preventDefault();
    onCreateNewProject({
      title,
      content,
      authorFirstName,
      authorLastName,
      uid,
    });
    history.push("/");
  };

  return (
    <div className="page-layout">
      <div className="container">
        <form onSubmit={handleSingUpSubmit} className="form red lighten-5">
          <h5 className="grey-text text-darken-2">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="authorFirstName">Author First Name</label>
            <input
              type="text"
              id="authorFirstName"
              value={authorFirstName}
              onChange={(e) => setAuthorFirstName(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="authorLastName">Author Last Name</label>
            <input
              type="text"
              id="authorLastName"
              value={authorLastName}
              onChange={(e) => setAuthorLastName(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              value={content}
              className="materialize-textarea"
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <input id="uid" name="uid" type="hidden" value={uid} />
          <div className="input-field">
            <button className="btn yellow darken-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewProject;
