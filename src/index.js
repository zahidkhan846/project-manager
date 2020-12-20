import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/Reducers/RootReducer";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { watchNotifications, watchProjects } from "./store/Saga/indexSaga";
import AuthProvider from "./context/AuthContext";
import thunk from "redux-thunk";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(saga, thunk))
);

saga.run(watchProjects);
saga.run(watchNotifications);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
