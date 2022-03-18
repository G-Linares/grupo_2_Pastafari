import React from "react";
import Navbar from "./Components/Shared/Navbar";
import Footer from "./Components/Shared/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import CreateItem from "./Components/Admin/CreateItem";
import NotFound from "./Components/NotFound";
import Dish from "./Components/Dish/Dish";

const App = () => {
  return (
    <>
      <div className="Wrapper">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/menu">
            <Menu />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/createItem">
            <CreateItem />
          </Route>
          <Route exact path="/dish/:id">
            <Dish />
          </Route>
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </>
  );
};

export default App;
