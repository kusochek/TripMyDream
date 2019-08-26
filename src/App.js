import React from 'react';
import './App.css';
import MainPage from './MainPage.js';
import SignIn from './SignInPage.js';
import SignUp from './SignUpPage.js';
import AdminPage from './AdminPage.js';
import UserPage from './UserPage.js';
import AddPage from './addPage.js';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';

const mainPage = () => (
  <MainPage />
);

const signin = () => (
  < SignIn />
);

const signup = () => (
  < SignUp />
);

const adminPage = () => (
  < AdminPage />
);

const user = () => (
  < UserPage />
);

const addPage = () => (
  <AddPage />
);

export default function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={mainPage} />
        <Route path="/signin" component={signin} />
        <Route path="/signup" component={signup} />
        <Route path="/admin" component={adminPage} />
        <Route path="/user" component={user} />
        <Route path="/add" component={addPage} />
      </Switch>
    </BrowserRouter>
  );
}
