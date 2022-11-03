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

import pizza_logo from "./pizza_icon.png";
import pizza_stack_img from "./pizza_stack.png"

const HeaderComponent = (props) => {
    const history = useHistory()
    const [windowSize, setWindowSize] = useState(getWindowSize())
    const [navToggle, setNavToggle] = useState(false)

    useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize())
        }
    
        window.addEventListener('resize', handleWindowResize)
    
        return () => {
          window.removeEventListener('resize', handleWindowResize)
        }
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
            <LogoComponent></LogoComponent>
            <NavigationComponent>
                {windowSize.innerWidth > 600 && <FullScreenComponent>
                    <ul>
                        {navigation_items.map((item) => {
                            return (
                                <li className="navigation-item">
                                    <div className="item-icon-wrapper">
                                        {(() => {
                                            if (item.name !== "order_pizza") {
                                                return (
                                                    <div className="item-icon" >
                                                        <i class={item.icon} aria-hidden="true"></i> 
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div 
                                                        className="item-icon"
                                                        style={{
                                                            backgroundImage: `url(${pizza_logo})`,
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
                </FullScreenComponent>}

                {windowSize.innerWidth <= 600 && 
                    <MiniScreenComponent pizza_stack_img={pizza_stack_img}>
                        <div 
                            className="pizza-burger-nav"
                            onClick={() => {
                                setNavToggle(!navToggle)
                            }} />

                        <ul className={`mini-ul ${navToggle ? "nav-toggle" : ""}`}>
                            {navigation_items.map((item) => {
                                return (
                                    <li className="navigation-item">
                                        <div className="item-icon-wrapper">
                                            {(() => {
                                                if (item.name !== "order_pizza") {
                                                    return (
                                                        <div className="item-icon" >
                                                            <i class={item.icon} aria-hidden="true"></i> 
                                                        </div>
                                                    )
                                                } else {
                                                    return (
                                                        <div 
                                                            className="item-icon"
                                                            style={{
                                                                backgroundImage: `url(${pizza_logo})`,
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
                    </MiniScreenComponent>}
            </NavigationComponent>
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
    border: 1px solid black;
    grid-template-columns: 15% 85%;
    grid-template-rows: 1fr;
    grid-template-areas: "logo navigation";
    position: relative;
`

const LogoComponent = styled.div`
    grid-area: logo;
    background-color: orange;
`

const NavigationComponent = styled.div`
    grid-area: navigation;
    display: grid;
    background-color: orange;
    height: 80px;
`

const FullScreenComponent = styled.div`
    ul {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        list-style-type: none;

        li {
            display: flex;
            height: 80px;
            width: 150px;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border: 2px solid black;
            border-radius: 5px;
            margin: 3px;

            div.item-icon-wrapper {
                display: flex;
                width: 45%;
                justify-content: center;
                align-items: center;

                div.item-icon {
                    display: flex;
                    width: 50px;
                    height: 50px;
                    border: 1px solid black;
                    border-radius: 50px;
                    justify-content: center;
                    align-items: center;

                    i {
                        font-size: 20pt;
                    }
                } 
            }

            div.item-title {
                width: 55%;
            }
        }
    }
`

const MiniScreenComponent = styled.div`
    height: 80px;
    width: 100%;
    background-color: orange;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5px;
    position: relative;

    div.pizza-burger-nav {
        height: 50px;
        width: 50px;
        background-image: ${props => { return `url(${props.pizza_stack_img})`}};
        background-size: 100% 100%;
    }

    ul {
        position: absolute;
        top: 81px;
        right: 0px;
        width: fit-content;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        margin-top: 5px;
        z-index: 1;
        background-color: white;
        opacity: 1;
        transition: opacity .5s ease-in-out;

        li {
            display: flex;
            flex-direction: row;
            height: 80px;
            border: 2px solid black;
            margin-left: 3px;
            margin-right: 3px;
            margin-bottom: 3px;
            border-radius: 5px;
            width: 250px;

            div.item-icon-wrapper {
                display: flex;
                width: 35%;
                justify-content: flex-end;
                align-items: center;

                div.item-icon {
                    display: flex;
                    width: 50px;
                    height: 50px;
                    border-radius: 50px;
                    justify-content: center;
                    align-items: center;
                    box-shadow: -1px 0px 10px 3px orange;

                    i {
                        font-size: 20pt;
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
                    font-size: 14pt;
                    font-weight: 600;
                    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
                }
            }
        }
    }

    ul.mini-ul.nav-toggle {
        opacity: 0;
    }
`

export {HeaderComponent}