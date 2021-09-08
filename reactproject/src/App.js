import './App.css';
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

function App() {
  return (
    <div>
    <Header/>
    <Note/>
    <Note2/>
    </div>
  );
}

export default App;

