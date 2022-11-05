/* eslint-disable */

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Redirect, matchPath } from "react-router-dom";


const CustomizeProductComponent = (props) => {
    const history = useHistory()

    const pizzaSizes = [
        {
            title: "Small",
            status: true,
            icon: null
        },
        {
            title: "Medium",
            status: false,
            icon: null
        },
        {
            title: "Large",
            status: false,
            icon: null
        },
        {
            title: "Extra Large",
            status: false,
            icon: null
        },
    ]

    const bodySectionContent = [
        {
            title: "Dough",
            name: "dough",
            status: true,
            content: (
                <div className="section-content">
                    <p>Hello</p>
                    <p>hi</p>
                </div>
            )
        },
        {
            title: "Topping",
            name: "topping",
            status: false,
            content: <div className="section-content"></div>
        },
        {
            title: "Extra",
            name: "extra",
            status: false,
            content: <div className="section-content"></div>
        },
        {
            title: "Instruction",
            name: "instruction",
            status: false,
            content: (
                <div className="instruction">
                    <p>This is instruction</p>
                </div>
            )
        }
    ]

    const [bodyContent, setBodyContent] = useState(bodySectionContent[0].content)

    useEffect(() => {

    }, [])

    return (
        <CustomizeProductComponentWrapper>
            <UpperSection>
                <div className="product-image"></div>
                <p className="product-title"></p>
                <p className="product-discription"></p>
                <div className="product-amount">
                    <input
                        className="decrease-btn"
                        type="button"
                        value="-"
                        onClick={() => {

                        }} />

                    <input
                        className="display-amount"
                        type="text" />

                    <input
                        className="increase-btn"
                        type="button"
                        value="+"
                        onClick={() => {

                        }} />
                </div>

                <div className="product-sizes">
                    {pizzaSizes.map((size, index) => {
                        return (
                            <div 
                                className="product-size" 
                                key={index}>
                                {size.title}
                            </div>
                        )
                    })}
                </div>
            </UpperSection>

            <BodySection>
                <div className="section-header">
                    {bodySectionContent.map((content, index) => {
                        return(
                            <div 
                                className="header-key" 
                                key={index}
                                onClick={() => {
                                    setBodyContent(bodySectionContent[index].content)
                                }}>
                                <p>{content.title}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="section-body">
                    {(() => {
                        return bodyContent
                    })()}
                </div>
            </BodySection>
        </CustomizeProductComponentWrapper>
    )
}

const CustomizeProductComponentWrapper = styled.div`
    height: fit-content;
    width: 100%;
    background-color: aquamarine;
    box-shadow: -0.5px -0.5px 5px 1px black;
    margin-top: 25px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    /* padding-top: 5px; */
    /* align-items: center; */

    @media only screen and (max-width: 600px) {
        width: 98%;
        margin-left: 1%;
        margin-right: 1%;
    }
`

const UpperSection = styled.div`
    width: 100%;
    height: 200px;
    background-color: firebrick;
    border-radius: 5px 5px 0px 0px;


`

const BodySection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 5px;
    /* align-items: center; */

    div.section-header {
        display: flex;
        flex-direction: row;
        gap: 10px;
        border: 2px solid black;
        height: 100px;
        justify-content: center;
        align-items: center;

        div.header-key {
            height: 80px;
            width: 100px;
            border: 2px solid black;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    div.section-body {
        height: 500px;
        border: 2px solid black;

        div.section-content {
            height: 100px;
            width: 100%;
        }
    }
`

export {CustomizeProductComponent}