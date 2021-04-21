import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SplashPage from './pages/SplashPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/signup' component={SignUpPage}></Route>
        <Route path='/myfridge/:id' component={ProfilePage}></Route>
        <Route path='/' component={SplashPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
