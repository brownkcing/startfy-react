import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Profile from './components/authentication/Profile';
import Login from './components/authentication/Login';
import SignUp from './components/authentication/SignUp';

ReactDOM.render(
  <BrowserRouter>
   <Switch>
     <Route exact path="/"component={App} />
      <Route exact path="/signup" component={App} />
      <Route exact path="/login" component={App} />
      <Route exact path="/profile" component={Profile} />  
    </Switch>   
  </BrowserRouter>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
