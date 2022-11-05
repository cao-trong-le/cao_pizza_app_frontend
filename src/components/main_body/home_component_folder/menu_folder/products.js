/* eslint-disable */

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { items } from "./dummy_data";
import { BrowserRouter as Router, Switch, Route, Redirect, matchPath } from "react-router-dom";

const ProductsComponent = (props) => {
    const item_types = [
        {
            type: "pizza",
            on_select: true,
            groups: [
                {
                    title: "Meat",
                    on_pick: true
                }, 
                {
                    title: "Veggie",
                    on_pick: false
                },
                {
                    title: "Cheese",
                    on_pick: false
                }
            ]
        },
        {
            type: "drink",
            on_select: false,
            groups: [
                {
                    title: "Milk",
                    on_pick: true
                }, 
                {
                    title: "Soft Drink",
                    on_pick: false
                },
                {
                    title: "Tea",
                    on_pick: false
                }
            ]
        }
    ]

    const [itemTypes, setItemTypes] = useState(item_types)
    const [products, setProducts] = useState([])


    useEffect(() => {
        var _products = []

        var copy_item_types = [...itemTypes]
        var i_type = copy_item_types.findIndex((type) => type.on_select === true)
        var type = copy_item_types[i_type].type
        var groups = copy_item_types[i_type].groups
        var i_group = groups.findIndex((group) => group.on_pick === true)
        var group = groups[i_group].title

        items.forEach((item, index) => {
            if (item.type === type && item.group == group.toLocaleLowerCase()) {
                _products.push(item)
            }   
        })

        setProducts([..._products])
    }, [itemTypes])

    return (
        <ProductsComponentWrapper>
            <div className="upper-section">
                <div className="product-type-wrapper">
                    {itemTypes.map((type, index) => {
                        return (
                            <div 
                                className={`product-type ${(() => {
                                    if (type.on_select)
                                        return "border-effect"
                                })()}`}
                                key={index}
                                onClick={() => {
                                    var item_types_copy = [...itemTypes]

                                    item_types_copy.forEach((type, i) => {
                                        if (i === index) {
                                            type.on_select = true
                                        } else {
                                            type.on_select = false
                                        }
                                    })

                                    setItemTypes([...item_types_copy])
                                }}>
                                <p>{(() => {
                                    return type.type.slice(0, 1).toUpperCase() + type.type.slice(1)
                                })()}</p>
                            </div>
                        )
                    })}
                </div>

                <div className="product-group-wrapper">
                    {(() => {
                        const index = itemTypes.findIndex((type) => type.on_select === true)
                        const type = itemTypes[index]
                    
                        return type.groups.map((group, index) => {
                            return (
                                <div 
                                    className={`product-group ${(() => {
                                        if (group.on_pick) {
                                            return "border-effect"
                                        }
                                    })()}`}
                                    data-index={index}
                                    data-group={group.title}
                                    key={index}
                                    onClick={(e) => {
                                        var copy_item_types = [...itemTypes]

                                        const i_type = copy_item_types.findIndex((type) => {
                                            return type.on_select === true
                                        })

                                        var copy_item_type = {...copy_item_types[i_type]}
                                        var copy_groups_type = copy_item_type.groups

                                        copy_groups_type.forEach((group, index) => {
                                            if (parseInt(e.target.getAttribute("data-index")) === index) {
                                                group.on_pick = true
                                            } else {
                                                group.on_pick = false
                                            }
                                        })
                                        
                                        copy_item_types.splice(i_type, 1, copy_item_type)

                                        setItemTypes([...copy_item_types])
                                    }}>
                                    <p>{group.title}</p>
                                </div>
                            )
                        })
                    })()}
                </div>
            </div>
            
            <div className="lower-section">
                <div className="products-wrapper">
                    {products.map((product, index) => {
                        return (
                            <div className="product-wrapper" key={index}>
                                <p className="product-title">{product.title}</p>
                                <div className="product-image"></div>
                                <p className="product-discription">{product.discription}</p>
                                <p className="product-price">${(() => {
                                    if (product.type === "pizza") {
                                        return product.price.small
                                    } else {
                                        return product.price.default
                                    }
                                })()}</p>

                                <div className="buttons-group">
                                    <input
                                        className="view-product-btn"
                                        type="button"
                                        value="View"
                                        onClick={() => {}} />

                                    <input
                                        className="order-product-btn"
                                        type="button"
                                        value="Order"
                                        onClick={() => {}} />

                                    {product.type === "pizza" && <input
                                        className="customize-product-btn"
                                        type="button"
                                        value="Customize"
                                        onClick={() => {}} />}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </ProductsComponentWrapper>
    )
}

const ProductsComponentWrapper = styled.div`
    width: 98%;
    background-color: orange;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin-left: 1%;
    margin-right: 1%;
    /* padding: 10px; */
    border-radius: 5px;
    box-shadow: 0.5px 0.5px 5px 1px black;

    div.lower-section {
        display: flex;
        flex-direction: column;
        width: 100%;

        div.products-wrapper {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            /* height: 550px; */
            gap: 20px;
            justify-content: center;
            align-items: center; 
            width: 100%;
            padding-top: 10px;
            padding-bottom: 10px;
            /* border: 2px solid black; */
            margin-top: 25px;
            width: 100%;
            padding-bottom: 10px;
        
            div.product-wrapper {
                display: grid;
                height: fit-content;
                width: 98%;
                /* border: 3px solid black; */
                align-items: center;
                justify-content: center;
                border-radius: 10px;
                grid-template-columns: 30% 55% 15%;
                grid-template-areas: 
                    "product-image product-title product-function"
                    "product-image product-discription product-function"
                    "product-image product-price product-function";
                grid-template-rows: 1fr 1fr 1fr;
                padding: 5px;
                /* grid-gap: 5px; */
                box-shadow: 0.5px 0.5px 3px 1px black;

                @media only screen and (max-width: 900px) {
                    grid-template-columns: 50% 50%;
                    grid-template-rows: 50px 200px 50px;
                    grid-template-areas: 
                        "product-image product-title"
                        "product-image product-discription"
                        "product-price product-function";
                }

                @media only screen and (max-width: 600px) {
                    grid-template-columns: 100%;
                    grid-template-rows: 50px 200px 200px 50px 80px;
                    grid-template-areas: 
                        "product-title"
                        "product-image"
                        "product-discription"
                        "product-price"
                        "product-function";
                }

                p.product-title {
                    grid-area: product-title;
                    margin-top: 10px;
                    font-size: 20pt;
                }

                p.product-discription {
                    grid-area: product-discription;
                }

                p.product-price {
                    grid-area: product-price;
                    font-size: 20pt;
                }

                div.product-image {
                    grid-area: product-image;
                    width: 100%;
                    height: 98%;
                    border: 2px solid black;
                    margin-top: 15px;
                    margin-bottom: 15px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                div.buttons-group {
                    grid-area: product-function;
                    /* position: absolute; */
                    /* bottom: 10px; */
                    width: 100%;
                    /* margin-top: 10px; */
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-end;
                    gap: 10px;
                    padding-top: 10px;
                    padding-bottom: 10px;

                    @media only screen and (max-width: 900px) {
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                    }

                    @media only screen and (max-width: 600px) {
                        flex-direction: row;
                    }

                    input[type="button"] {
                        height: 50px;
                        width: 100px;
                        border: none;
                        outline: none;
                        border: 3px solid black;
                        border-radius: 5px;
                        font-size: 14pt;
                    }
                }
            }
        }
    }

    div.upper-section {
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: sticky;
        top: 0px;
        z-index: 1;
        width: 100%;
        background-color: orange;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 0px 0px 5px 5px;
        box-shadow: 0.5px 0.5px 3px 1px black;

        div.product-type-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;

            div.product-type {
                height: 60px;
                width: 100px;
                border: 3px solid rgba(214, 108, 2, .4);
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                border-radius: 10px;
                color: rgba(214, 108, 2, 1);
                font-size: 17pt;
                text-shadow: 0.5px 0.5px 2px black;

                p {
                    pointer-events: none;
                }
            }

            div.product-type.border-effect {
                border: 3px solid rgba(214, 108, 2, 1);
                box-shadow: .5px .5px 5px 1px rgba(214, 108, 2, 1);
            }
        }

        div.product-group-wrapper {
            display: flex;
            flex-direction: row;
            gap: 10px;

            div.product-group {
                height: 60px;
                width: 100px;
                border: 3px solid rgba(214, 108, 2, .4);
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                border-radius: 10px;
                font-size: 16pt;
                color: rgba(214, 108, 2, 1);
                text-shadow: 0.5px 0.5px 2px black;

                p {
                    pointer-events: none;
                }
            }

            div.product-group.border-effect {
                border: 3px solid rgba(214, 108, 2, 1);
                box-shadow: .5px .5px 5px 1px rgba(214, 108, 2, 1);
            }
        }
    }
`

export {ProductsComponent}