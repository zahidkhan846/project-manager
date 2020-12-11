import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/Reducers/RootReducer";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { watchProjects } from "./store/Saga/index";
import AuthProvider from "./context/AuthContext";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const saga = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(saga)));

saga.run(watchProjects);

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </Provider>,
  document.getElementById("root")
);
