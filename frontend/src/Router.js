import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import App from './App';
// import NotFound from './components/NotFound';
import Home from './components/Home';
import SignUp from './components/signup/SignUp';
import Login from './components/login/Login';

const Router = () => {
  const user = {
    username: "Buddy"
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Home user={user}/> }/>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
