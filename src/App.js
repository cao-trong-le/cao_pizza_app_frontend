/* eslint-disable */

import './App.css';
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Redirect, matchPath } from "react-router-dom";

import { 
  HeaderComponent,

  MainBodyComponent,
  HomeComponent,
} from './components';

const App = () => {
  const router = () => {
    return (
      <Switch>
        {/* How to set default index page */}
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/menu/" />
          }}
        />
        <Route exact path="/menu/" component={HomeComponent} />
        {/* <Route exact path="/home/posts/:post_code/" component={PostViewComponent} />
        <Route exact path="/new/post/" component={CreatePostComponent} />
        <Route exact path="/register/" component={RegisterFormComponent} />
        <Route exact path="/login/" component={LoginFormComponent} /> */}
      </Switch>
    )
  }


  return (
    <AppComponent className="App">
      <HeaderComponent />
      <MainBodyComponent>
        {router()}
      </MainBodyComponent>
    </AppComponent>
  );
}

const AppComponent = styled.div``

// const MainBodyComponent = styled.div``

export default App;
