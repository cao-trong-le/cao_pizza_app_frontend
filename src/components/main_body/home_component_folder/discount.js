/* eslint-disable */

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Redirect, matchPath } from "react-router-dom";
import discount_tag from "./discount_tag.png";
import discount_bubble from "./discount_bubble.PNG";
import discount_arrow from "./discount_arrow.png";

const DiscountItemComponent = (props) => {
    return (
        <DiscountItemComponentWrapper>
            <p className="product-title">
                {props.product.title}
            </p>

            <div className="product-price">
                <div className="original-price-wrapper">
                    <p>was</p>
                    <p className="original-price">${props.product.price}</p>
                </div>
                <div 
                    className="discount-arrow"
                    style={{
                        backgroundImage: `url(${discount_arrow})`,
                        backgroundSize: "100% 100%",
                    }}></div>

                <div className="discount-price-wrapper">
                    <p 
                        className="now-word"
                        style={{
                            fontSize: "16pt",
                        }}>now</p>
                    <span
                        style={{
                            fontSize: "15pt",
                        }}>
                        {(() => {
                            const origin_price = props.product.price
                            const discount = props.product.discount
                            return <p>${(origin_price - (origin_price * (discount / 100))).toFixed(2).toString()}</p>
                        })()}
                    </span>
                </div>
            </div>

            <div 
                className="discount-tag"
                style={{
                    backgroundImage: `url(${discount_bubble})`,
                    backgroundSize: "100% 100%"
                }}>
                <p>{props.product.discount}%</p>
            </div>

            <input
                className="order-now-btn"
                type="button"
                value="Order Now"
                onClick={() => {
                    
                }} />
        </DiscountItemComponentWrapper>
    )
}

const DiscountItemComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 200px;
    /* border: 1px solid black; */
    margin-top: 25px;
    /* margin-right: 20px; */
    position: relative;
    border-radius: 10px;
    padding: 5px;
    padding-top: 25px;
    align-items: center;
    background-color: rgba(209, 95, 2, 0.9);
    transition: height 0.5s, width 0.5s ease-out;

    &:hover {
        box-shadow: 0.5px 0.5px 10px 0.5px black;
    }

    p.product-title {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 16pt;
        font-weight: 800;
    }

    div.product-price {
        display: flex;
        gap: 20px;
        position: absolute;
        bottom: 75px;
        /* border: 1px solid black; */
        width: 90%;
        
        div.discount-arrow {
            height: 30px;
            width: 30px;
        }

        div.discount-price-wrapper {
            position: absolute;
            top: -15px;
            right: 0;
        }
    }

    input.order-now-btn {
        position: absolute;
        border: none;
        height: 40px;
        width: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 10px;
        right: 5px;
        border-radius: 5px;
        font-size: 11pt;
        font-weight: 600;
        outline: none;
        border: 3px solid black;
    }

    div.discount-tag {
        position: absolute;
        top: -25px;
        right: -25px;
        background-color: transparent;
        height: 50px;
        width: 50px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        z-index: 1;

        p {
            /* margin-top: 4px; */
            font-size: 12pt;
            font-weight: 900;
            /* border: 1px solid black; */
        }
    }
`

const DiscountComponent = (props) => {
    const dummyDiscountProducts = [
        {
            title: "Chicken Nuggets",
            image: null,
            price: 19.99,
            discount: 10
        },
        {
            title: "Vietnamese Coconut Larva Pizza",
            image: null,
            price: 25.99,
            discount: 30
        },
        {
            title: "Black Pizza",
            image: null,
            price: 35.99,
            discount: 20
        }
    ]

    return (
        <DiscountComponentWrapper>
            <div className="discount-component-header">
                <p>Today Discount</p>
            </div>
            <div className="discount-component-body">
                {dummyDiscountProducts.map((product, index) => {
                    return <DiscountItemComponent key={index} product={product} />
                })}
            </div>
        </DiscountComponentWrapper>
    )
}

const DiscountComponentWrapper = styled.div`
    height: fit-content;
    width: 100%;
    background-color: white;
    box-shadow: -0.5px -0.5px 5px 1px black;
    margin-top: 25px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    div.discount-component-header {
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        p {
            font-size: 16pt;
        }
    }

    div.discount-component-body {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        gap: 25px;
        padding: 10px;
        /* align-content: space-around; */
    }
    
    @media only screen and (max-width: 600px) {
        width: 98%;
        margin-left: 1%;
        margin-right: 1%;
    }
`

export {DiscountComponent}