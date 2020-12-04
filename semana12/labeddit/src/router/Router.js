import React from 'react'
import FeedPage from '../pages/FeedPage'
import LoginPage from '../pages/LoginPage'
import RegisterFormPage from '../pages/RegisterFormPage'
import PostPage from '../pages/PostPage'
import ErrorPage from '../pages/ErrorPage'

import { BrowserRouter, Route, Switch } from "react-router-dom"

function Router() {
  return (
    <BrowserRouter>
    <Switch>
      
      <Route exact path="/">
        <FeedPage/>
      </Route>

      <Route exact path="/login">
        <LoginPage/>
      </Route>

      <Route exact path="/register">
        <RegisterFormPage/>
      </Route>

      <Route exact path="/post/:id">
        <PostPage/>
      </Route>

      <Route path="/error">
        <ErrorPage/>
      </Route>

    </Switch >
  </BrowserRouter>
  

  );
}

export default Router;
