import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Error from "./components/404/404";
import ProjectDetails from "./components/Project/ProjectDetails";
import SignIn from "./components/Auth/Sign-In";
import SignUp from "./components/Auth/Sign-Up";
import NewProject from "./components/Project/NewProject";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute path="/project/:id" component={ProjectDetails} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/new-project" component={NewProject} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
