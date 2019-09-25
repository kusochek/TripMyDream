import React from 'react';
import './App.css';
import MainPage from './page_component/MainPage';
import SignIn from './page_component/SignInPage';
import SignUp from './page_component/SignUpPage';
import AdminPage from './page_component/AdminPage';
import UserPage from './page_component/UserPage';
import AddPage from './page_component/addPage';
import DetailPage from './page_component/DetailPage';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';

export default function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/user" component={UserPage} />
        <Route path="/add" component={AddPage} />
        <Route path="/detail" component={DetailPage} />
      </Switch>
    </BrowserRouter>
  );
}
