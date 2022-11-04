/* eslint-disable */

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Redirect, 
    matchPath,
    useHistory
} from "react-router-dom";

import pizza_icon from "./pizza_icon.png";
import pizza_stack_img from "./pizza_stack.png";
import pizza_logo_img from "./pizza_logo.png";
import pizza_shop from "./pizza_shop.png";

const HeaderComponent = (props) => {
    const history = useHistory()
    const [windowSize, setWindowSize] = useState(getWindowSize())
    const [navToggle, setNavToggle] = useState(false)

    useEffect(() => {
        function handleWindowResize() {setWindowSize(getWindowSize())}
    
        window.addEventListener('resize', handleWindowResize)
    
        return () => {window.removeEventListener('resize', handleWindowResize)}
    }, [])

    const navigation_items = [
        {
            title: "Home",
            name: "home",
            icon: "fa fa-home", 
            link: "/home/"
        }, 
        {
            title: "About Us",
            name: "about_us",
            icon: "fa fa-user", 
            link: "/about/us/"
        },
        {
            title: "Order Pizza",
            name: "order_pizza",
            icon: null,
            link: "/order/menu/"
        },
        {
            title: "Sign Up",
            name: "sign_up",
            icon: "fa fa-user-plus", 
            link: "/user/signup/"
        },
        {
            title: "Sign In",
            name: "sign_in",
            icon: "fa fa-sign-in",
            link: "/user/signin"
        }
    ]

    // const fullScreenNavigation = () => {
        
    // }

    // const minimizedScreenNavigation = () => {

    // }

    return (
        <HeaderComponentWrapper>
            <LogoComponent 
                className="pizza-logo" 
                pizza_logo={pizza_logo_img}>
                <div className="pizza-logo-holder"></div>
            </LogoComponent>
            <NavigationComponent>
                <FullScreenComponent>
                    <ul>
                        {navigation_items.map((item, key) => {
                            return (
                                <li className="navigation-item" key={key}>
                                    <div className="item-icon-wrapper">
                                        {(() => {
                                            if (item.name !== "order_pizza") {
                                                return (
                                                    <div className="item-icon" >
                                                        <i className={item.icon} aria-hidden="true"></i> 
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div 
                                                        className="item-icon"
                                                        style={{
                                                            backgroundImage: `url(${pizza_icon})`,
                                                            backgroundSize: "100% 100%",
                                                        }} />
                                                )
                                            }
                                        })()}
                                        
                                    </div>
                                    
                                    <div className="item-title">
                                        <p>{item.title}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </FullScreenComponent>

                <MiniScreenComponent pizza_stack_img={pizza_stack_img}>
                    <div 
                        className="pizza-burger-nav"
                        onClick={() => {
                            setNavToggle(!navToggle)
                        }} />

                    <ul className={`mini-ul ${navToggle ? "nav-toggle" : ""}`}>
                        {navigation_items.map((item, key) => {
                            return (
                                <li className="navigation-item" key={key}>
                                    <div className="item-icon-wrapper">
                                        {(() => {
                                            if (item.name !== "order_pizza") {
                                                return (
                                                    <div className="item-icon" >
                                                        <i className={item.icon} aria-hidden="true"></i> 
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div 
                                                        className="item-icon"
                                                        style={{
                                                            backgroundImage: `url(${pizza_icon})`,
                                                            backgroundSize: "100% 100%",
                                                        }} />
                                                )
                                            }
                                        })()}
                                        
                                    </div>
                                    
                                    <div className="item-title">
                                        <p>{item.title}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </MiniScreenComponent>
            </NavigationComponent>
            <GoHomeComponent 
                className="go-home-component" 
                pizza_shop={pizza_shop}>
                <div 
                    className="pizza-shop"
                    onClick={() => {
                        history.push("/home/menu/")
                    }} />
            </GoHomeComponent>
        </HeaderComponentWrapper>
    )
}

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

const HeaderComponentWrapper = styled.div`
    display: grid;
    height: auto;
    width: 100%;
    /* border: 1px solid black; */
    grid-template-columns: 15% 85%;
    grid-template-rows: 1fr;
    grid-template-areas: "logo navigation";
    position: relative;

    @media only screen and (max-width: 600px) {
        grid-template-columns: 35% 30% 35%;
        grid-template-areas: "go_home logo navigation"
    }
`

const GoHomeComponent = styled.div`
    grid-area: go_home;
    background-color: orange;

    div.pizza-shop {
        height: 80px;
        width: 80px;
        background-image: ${props => { return `url(${props.pizza_shop})`}};
        background-size: 100% 100%;
    }

    @media only screen and (min-width: 600px) {
        display: none;
    }
`

const LogoComponent = styled.div`
    grid-area: logo;
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    
    div.pizza-logo-holder {
        height: 80px;
        width: 80px;
        background-image: ${props => { return `url(${props.pizza_logo})`}};
        background-size: 100% 100%;
    }
`

const NavigationComponent = styled.div`
    grid-area: navigation;
    display: grid;
    background-color: orange;
    height: 80px;
    grid-template-columns: 100%;
    grid-template-rows: 1fr;
    grid-template-areas: "fullscreen";

    @media only screen and (max-width: 600px) {
        grid-template-areas: "miniscreen"
    }
`

const FullScreenComponent = styled.div`
    grid-area: fullscreen;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        
        li {
            display: flex;
            flex-direction: row-reverse;
            justify-content: flex-start;
            align-items: center;
            border: 2px solid black;
            border-radius: 50px;
            margin: 3px;
            height: 50px;
            width: 50px;
            transition: width 0.2s;

            &:hover {
                width: 200px;
            }

            &:hover > div.item-title {
                display: initial;
            }

            div.item-icon-wrapper {
                display: flex;
                justify-content: center;
                align-items: center;
                width: fit-content;

                div.item-icon {
                    display: flex;
                    width: 45px;
                    height: 45px;
                    /* border: 1px solid black;
                    border-radius: 50px; */
                    justify-content: center;
                    align-items: center;

                    i {
                        font-size: 20pt;
                    }
                }
                
            }

            div.item-title {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 150px;
                display: none;
                font-size: 14pt;
                font-weight: 600;
                /* border: 1px solid black; */
                margin-right: 5px;
            }
        }
    }

    @media only screen and (max-width: 600px) {
        display: none;
    }
`

const MiniScreenComponent = styled.div`
    grid-area: miniscreen;
    height: 80px;
    width: 100%;
    background-color: orange;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5px;
    position: relative;

    @media only screen and (min-width: 600px) {
        display: none;
    }

    div.pizza-burger-nav {
        height: 50px;
        width: 50px;
        background-image: ${props => { return `url(${props.pizza_stack_img})`}};
        background-size: 100% 100%;
    }

    ul {
        position: absolute;
        top: 81px;
        right: 1px;
        width: fit-content;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        margin-top: 5px;
        z-index: 10;
        background-color: transparent;
        display: none;
        direction: rtl;
        transition: display .5s ease-in-out;

        li {
            display: flex;
            flex-direction: row-reverse;
            height: 80px;
            /* border: 2px solid black; */
            background-color: white;
            margin-left: 3px;
            margin-right: 3px;
            margin-bottom: 6px;
            border-radius: 10px;
            width: 250px;
            padding-right: 5px;
            box-shadow: -0.5px -0.5px 5px 2px rgba(209, 95, 2, 1);
            transition: width .5s;

            &:hover {
                /* height: 85px; */
                width: 270px;
            }

            div.item-icon-wrapper {
                display: flex;
                width: 35%;
                justify-content: flex-end;
                align-items: center;

                div.item-icon {
                    display: flex;
                    width: 55px;
                    height: 55px;
                    border-radius: 50px;
                    justify-content: center;
                    align-items: center;
                    /* box-shadow: -1px 0px 10px 3px orange; */

                    i {
                        font-size: 22pt;
                        color: rgb(191, 88, 4)
                    }
                } 
            }

            div.item-title {
                width: 65%;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;
                padding-right: 20px;
                
                p {
                    font-size: 16pt;
                    font-weight: 600;
                    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
                }
            }
        }
    }

    ul > * {
        direction: ltr;
    }


    ul.mini-ul.nav-toggle {
        display: initial;
    }
`

export {HeaderComponent}