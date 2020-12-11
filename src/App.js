import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Error from "./components/404/404";
import ProjectDetails from "./components/Project/ProjectDetails";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/Sign-Up";
import NewProject from "./components/Project/NewProject";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/project/:id" component={ProjectDetails} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/new-project" component={NewProject} />
        {/* <Route path="/logout" component={Logout} /> */}
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
