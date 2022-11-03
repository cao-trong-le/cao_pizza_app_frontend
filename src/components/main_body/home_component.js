/* eslint-disable */

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Redirect, matchPath } from "react-router-dom";

const HomeComponent = (props) => {
    return (
        <HomeComponentWrapper>
            <div><p>Say Hello, This is the home page.</p></div>
        </HomeComponentWrapper>
    )
}

const HomeComponentWrapper = styled.div``

export {HomeComponent}