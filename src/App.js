import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ProjectDetails from "./components/Project/ProjectDetails";
import NewProject from "./components/Project/NewProject";
import Error from "./components/404/404";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <PrivateRoute path="/new-project" component={NewProject} />
        <PrivateRoute path="/project/:id" component={ProjectDetails} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
