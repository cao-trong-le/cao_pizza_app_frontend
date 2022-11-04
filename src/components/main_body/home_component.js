/* eslint-disable */

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Redirect, 
    matchPath 
} from "react-router-dom";

import { BannerComponent } from "./home_component_folder/banner";
import { DiscountComponent } from "./home_component_folder/discount";
import { SpecialComponent } from "./home_component_folder/special";
import { MenuComponent } from "./home_component_folder/menu";

const HomeComponent = (props) => {
    return (
        <HomeComponentWrapper>
            <BannerComponent />
            <DiscountComponent />
            <div className="lower-group">
                <MenuComponent />
                <SpecialComponent />
            </div>
        </HomeComponentWrapper>
    )
}

const HomeComponentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div.lower-group {
        display: flex;
        width: 100%;
        flex-direction: row-reverse;
        gap: 25px;

        @media only screen and (max-width: 600px) {
            flex-direction: column;
            gap: 0px;
            width: 98%;
        }
    }
`

export {HomeComponent}