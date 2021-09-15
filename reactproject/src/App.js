import './App.css';
import React from 'react';
import logo from './logo.svg';
import Signup from './Signup'
import SignIn from './signin';
import Header from './Components/header';
import State from './ReactPractice/State';
import Props from './ReactPractice/Props';
import ListRendering from './ReactPractice/ListRendering';
import Note from './Components/Note';
import { Note2 } from './Components/Note2';
import UseState from './ReactPractice/UseState';
import Signupnew from './Signupnew';
import { Signin } from './services/Userservice2';
import ConditionalRendering from './ReactPractice/ConditionalRendering';
import TemporaryDrawer from './Components/TemporaryDrawer';
import ClassComponent from './ReactPractice/ClassComponent';
import { FunctionalComponent } from './ReactPractice/FunctionalComponent';
import { props } from './ReactPractice/Props';
import GetRequest from './ReactPractice/GetRequest';
import PostRequest from './ReactPractice/PostRequest';
import Promises from './ReactPractice/Promises';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";


function App() {
  const [navbarDrawerExpand, setNavbarDrawerExpand] = React.useState(false);
  const drawerExpand = () => {
    setNavbarDrawerExpand(!navbarDrawerExpand);
  }
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
