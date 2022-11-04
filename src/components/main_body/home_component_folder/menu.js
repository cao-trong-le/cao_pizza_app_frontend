/* eslint-disable */

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Redirect, matchPath } from "react-router-dom";
import pizza_menu from "./pizza_menu.png";

const MenuComponent = (props) => {
    const history = useHistory()

    return (
        <MenuComponentWrapper 
            style={{
                backgroundImage: `url(${pizza_menu})`,
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
            onClick={() => {
                history.push("/home/menu/products/")
            }}>
            <p>Menu</p>
        </MenuComponentWrapper>
    )
}

const MenuComponentWrapper = styled.div`
    height: 200px;
    width: 100%;
    background-color: aquamarine;
    box-shadow: -0.5px -0.5px 5px 1px black;
    margin-top: 25px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover > p {
        font-size: 35pt;
    }

    p {
        font-size: 30pt;
        text-shadow: 1px 1px 2px white;
    }

    /* @media only screen and (max-width: 600px) {
        width: 98%;
        margin-left: 1%;
        margin-right: 1%;
    } */
`

export {MenuComponent}