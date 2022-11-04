/* eslint-disable */

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Redirect, matchPath } from "react-router-dom";

const ProductsComponent = (props) => {
    const drinkTypes = ["Milk", "Soft Drink", "Tea"]
    const pizzaTypes = ["Meat", "Veggie", "Cheese"]

    return (
        <ProductsComponentWrapper>
            <div className="drink">
                <p>Drink</p>
                <div>
                    {drinkTypes.map((drink, index) => {
                        return (
                            <input
                                key={index}
                                className="drink-type"
                                type="button"
                                value={drink} />
                        )
                    })}
                </div>
            </div>
            <div className="pizza">
                <p>Pizza</p>
                <div>
                    {pizzaTypes.map((pizza, index) => {
                        return (
                            <input
                                key={index}
                                className="drink-type"
                                type="button"
                                value={pizza} />
                        )
                    })}
                </div>
            </div>
        </ProductsComponentWrapper>
    )
}

const ProductsComponentWrapper = styled.div`
    width: 100%;
    background-color: orange;
    margin-top: 25px;
`

export {ProductsComponent}