import './App.css';
import React from 'react';
import logo from './logo.svg';
import Signup from './Signup'
import SignIn from './signin';
import Header from './header';
import State from './ReactPractice/State';
import Props from './ReactPractice/Props';
import ListRendering from './ReactPractice/ListRendering';
import Note from './Note';
import { Note2 } from './Note2';
import UseState from './ReactPractice/UseState';
import UseStateWithPreviousState from './ReactPractice/UseStateWithPreviousState';
import Signupnew from './Signupnew';
import MultipleInputs from './Signup';
import { Signin } from './services/Userservice2';
import ConditionalRendering from './ReactPractice/ConditionalRendering';
import TemporaryDrawer from './TemporaryDrawer';
import ClassComponent from './ReactPractice/ClassComponent';
import { FunctionalComponent } from './ReactPractice/FunctionalComponent';
import { props } from './ReactPractice/Props';


function App() {
  const [navbarDrawerExpand, setNavbarDrawerExpand] = React.useState(false);
  const drawerExpand = () => {
    setNavbarDrawerExpand(!navbarDrawerExpand);
  }
  return (
    <div>
      <SignIn />
    </div>
  );
}

export default App;
