/* eslint-disable */

import './App.css';
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Redirect, matchPath } from "react-router-dom";

import { 
  HeaderComponent,

  // MainBodyComponent,
  HomeComponent,
} from './components';

import { ProductsComponent } from 'components/main_body/home_component_folder/menu_folder/products';

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
        <Route exact path="/home/menu/" component={HomeComponent} />
        <Route exact path="/home/menu/products/" component={ProductsComponent} />
        {/* <Route exact path="/new/post/" component={CreatePostComponent} />
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

const AppComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const MainBodyComponent = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 800px) {
      width: 100%;
  }
`

export default App;
