import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import { connect } from "react-redux";
import FindCar from "./pages/FindCar";
import Sell from "./pages/Sell";
import MoreInfo from "./pages/MoreInfo";
import Checkout from "./pages/Checkout";
import SmallNav from './components/SmallNav';


function App(props) {

const [smallMenu, setSmallMenu] = useState(false);
const [open, setOpen] = useState('');


  const smallNavHandler = () => {
    if(open){
      setOpen('');
      setSmallMenu(false);
    }else{
      setOpen('open');
      setSmallMenu(true);
    }
  }

  return (
    <Router>
      <div className="app">
        <button className="hamburger" onClick={smallNavHandler}>
        <span className={"hamburger__inner " + open}></span>
      </button>
        {!smallMenu && <Header/>}
        {smallMenu && <SmallNav clicked={smallNavHandler}/>}
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/findcar">
            <FindCar />
          </Route>
          <Route path="/sellcar">
            <Sell />
          </Route>
          <Route path="/more-info">
            <MoreInfo/>
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onLogUserIn: (authUser) => dispatch({type: 'SET_USER', user: authUser}),
    onLogUserOut: () => dispatch({type: 'REMOVE_USER'})
  }
}

export default connect(null, mapDispatchToProps)(App);
