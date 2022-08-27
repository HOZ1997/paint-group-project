import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import AboutPage from "../AboutPage/AboutPage";
import UserPage from "../UserPage/UserPage";
// import InfoPage from "../ProjectInformationPage/ProjectInformationPage";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import ProjectInformationPage from "../xProjectInfoPage/ProjectInfo";
import ImagePage from "../ImagePage/ImagePage";
import Projects from "../Projects/Projects";
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import WorkOrder from "../WorkOrder/WorkOrder";
import AddProject from "../AddProject/AddProject";
import AddClient from "../AddClient/AddClient";
import ProjectScope from "../ProjectScope/ProjectScope";
import EstimateCost from "../EstimateCost/EstimateCost";

import SpecialFeatureBox from "../SpecialFeature/SpecialFeatureBox";
import Proposal from "../Proposal/Proposal";

// testing displays
import InputPageExample1 from "../ProjectInformationPage/ProjectInformationPage";
import InputPageExample2 from "../InputPageExample2/InputPageExample2";
import InputPageExample3 from "../InputPageExample3/InputPageExample3";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          <Route exact path="/WorkOrder">
            <WorkOrder />
          </Route>

          <Route exact path="/ProjectDetails">
            <ProjectDetails />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          {/* <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute> */}

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/addclient"
          >
            <AddClient/>
          </ProtectedRoute>

          <Route exact path="/login">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route exact path="/registration">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage />
            )}
          </Route>

          <Route exact path="/home">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the Landing page
              <LandingPage />
            )}
          </Route>
          <Route exact path="/information">
            <ProjectInformationPage />
          </Route>
          <Route exact path="/projectScope">
            <projectScope />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/addproject">
            <AddProject />
          </Route>
          <Route exact path="/estimatecost">
            <EstimateCost />
          </Route>
          <Route exact path="/image">
            <ImagePage />
          </Route>
          <Route exact path="/specialfeature">
            <SpecialFeatureBox />
          </Route>

          <Route exact path="/proposal">
            <Proposal />
          </Route>

      {/* Testing display options */}
          <Route exact path="/InputPageExample1">
            <InputPageExample1 />
          </Route>
          <Route exact path="/InputPageExample2">
            <InputPageExample2 />
          </Route>
          <Route exact path="/InputPageExample3">
            <InputPageExample3 />
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
