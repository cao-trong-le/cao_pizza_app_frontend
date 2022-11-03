/* eslint-disable */

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Redirect, matchPath } from "react-router-dom";

const MainBodyComponent = (props) => {
    return (
        <MainBodyComponentWrapper>
            <div><p>Say Hello, This is the body.</p></div>
        </MainBodyComponentWrapper>
    )
}

const MainBodyComponentWrapper = styled.div``

export {MainBodyComponent}