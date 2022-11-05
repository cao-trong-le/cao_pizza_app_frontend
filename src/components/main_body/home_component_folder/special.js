/* eslint-disable */

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Redirect, matchPath } from "react-router-dom";

const SpecialComponent = (props) => {
    return (
        <SpecialComponentWrapper>
            <div><p>Today Special</p></div>
        </SpecialComponentWrapper>
    )
}

const SpecialComponentWrapper = styled.div`
    height: 500px;
    width: 100%;
    background-color: aquamarine;
    box-shadow: -0.5px -0.5px 5px 1px black;
    margin-top: 25px;
    margin-bottom: 25px;
    border-radius: 5px;

    /* @media only screen and (max-width: 600px) {
        width: 98%;
    } */
`

export {SpecialComponent}