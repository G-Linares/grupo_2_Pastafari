import React, { useEffect, useState } from "react";
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
import MyAccount from "./Components/MyAccount/MyAccount";
import Cart from "./Components/Cart/Cart";
import { AuthContext } from "./helpers/AuthContext";

const App = () => {

  const [authState, setAuthState] = useState(false);

  // cuando se hace refresh checa si hay un accces token
  // puedo hacer validacion con fetch a api para ver si existe pero es mucho problema
  useEffect(() => {
    if(localStorage.getItem("accessToken")){
      setAuthState(true);
    }
  },[])

  return (
    <>
      <div className="Wrapper">
        <AuthContext.Provider value={{ authState, setAuthState }}>
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
            <Route exact path="/cart">
              <Cart/>
            </Route>
            <Route exact path="/myAccount">
              <MyAccount />
            </Route>
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </AuthContext.Provider>
      </div>
    </>
  );
};

export default App;
