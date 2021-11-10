import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Attributes from "./pages/Attributes/Attributes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/attributes" component={Attributes} />
          <Redirect to="/" />
        </Switch>
        <div className="bk2">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
