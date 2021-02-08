import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
          <Route path={process.env.PUBLIC_URL + "/about"} component={About} />
          <Route
            path={process.env.PUBLIC_URL + "/contact"}
            component={Contact}
          />
          <Route path="*" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
