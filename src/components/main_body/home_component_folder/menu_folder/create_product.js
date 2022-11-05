/* eslint-disable */

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Redirect, matchPath } from "react-router-dom";
import pizza_menu from "./pizza_menu.png";

const CreateProductComponent = (props) => {
    const history = useHistory()

    return (
        <CreateProductComponentWrapper>
            <div className=""></div>
        </CreateProductComponentWrapper>
    )
}

const CreateProductComponentWrapper = styled.div`
    height: 200px;
    width: 100%;
    background-color: aquamarine;
    box-shadow: -0.5px -0.5px 5px 1px black;
    margin-top: 25px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export {CreateProductComponent}