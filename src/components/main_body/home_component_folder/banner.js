/* eslint-disable */

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {List, Item} from 'linked-list'
import { BrowserRouter as Router, Switch, Route, Redirect, matchPath } from "react-router-dom";

import { CircularDoublyLinkedList } from "helper/curcular_doubly_linked_list";

const BannerComponent = (props) => {
    // demo purposes
    const images = [
        "hello", 
        "pla",
        "fa"
    ]

    // const imageList = new List()
    const [bannerImages, setBannerImages] = useState(null)
    const [bannerImage, setBannerImage] = useState(null)
    const [onDot, setOnDot] = useState(0)

    useEffect(() => {
        console.log("running")

        var circularLinkedList = new CircularDoublyLinkedList()

        for (var image of images) {
            circularLinkedList.append(image)
        }


        console.log(circularLinkedList.head.next)

        const head = circularLinkedList.head

        setBannerImages(circularLinkedList)
        setBannerImage(head)
        
        // console.log(circularLinkedList.toArray())
    }, [])

    // useEffect(() => {
    //     if (bannerImages)
    //         print(bannerImages.value)
    // }, [bannerImages])


    return (
        <BannerComponentWrapper>
            <BannerWrapper>
                <div className="banner-image">{(() => {
                    if (bannerImage)
                        return bannerImage.value
                    return ""
                })()}</div>

                <div 
                    className="left-arrow arrow"
                    onClick={() => {
                        const preImage = bannerImage.prev
                        setBannerImage(preImage)
                        setOnDot(parseInt(preImage.index))

                        const target = document.querySelector(".banner-image")
                        target.classList.add("blink-effect")

                        setTimeout(() => {
                            target.classList.remove("blink-effect")
                        }, 500)
                    }}></div>

                <div 
                    className="right-arrow arrow"
                    onClick={() => {
                        const nextImage = bannerImage.next
                        setBannerImage(nextImage)
                        setOnDot(parseInt(nextImage.index))

                        const target = document.querySelector(".banner-image")
                        target.classList.add("blink-effect")

                        setTimeout(() => {
                            target.classList.remove("blink-effect")
                        }, 500)
                    }}></div>

                <div className="nav-dots">
                    {images.map((image, index) => {
                        return <i 
                            class={(() => {
                                if (index !== onDot) {
                                    return "fa fa-circle-thin"
                                } else {
                                    return "fa fa-circle"
                                }
                            })()}
                            data-index={index}
                            aria-hidden="true" 
                            key={index}
                            onClick={(e) => {
                                // console.log()
                                const node = bannerImages.traverseToIndex(parseInt(e.target.getAttribute("data-index")))
                                console.log(node)
                                setBannerImage(node)
                                setOnDot(parseInt(e.target.getAttribute("data-index")))
                            }}></i>
                    })}
                </div>
            </BannerWrapper>
        </BannerComponentWrapper>
    )
}

const BannerComponentWrapper = styled.div`
    height: 250px;
    width: 100%;
    /* border: 1px solid black; */
    box-shadow: -0.5px 0.5px 5px 1px black;
    margin-top: 25px;
    position: relative;

    @media only screen and (max-width: 600px) {
        width: 98%;
        margin-left: 1%;
        margin-right: 1%;
    }
`

const BannerWrapper = styled.div`
    width: 100%;
    height: 250px;

    div.banner-image {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0px;
        left: 0px;
        right: 0px;
        background-color: green;
        opacity: 1;
        transition: opacity .25s;
    }

    div.banner-image.blink-effect {
        opacity: 0;
    }

    /* div.banner-image.left-effect {
        left: 50px;
        background-color: blue;
        transition: left 0.1s;
    }

    div.banner-image.right-effect {
        right: 20px;
        background-color: red;
        transition: right 0.1s, top 0.1s;
    } */

    div.nav-dots {
        position: absolute;
        bottom: 10px;
        width: 100%;
    }

    div.arrow {
        border: 1px solid black;
        height: 50px;
        width: 50px;
        position: absolute;
    }

    div.right-arrow {
        top: 100px;
        right: 20px;
    }

    div.left-arrow {
        top: 100px;
        left: 20px;
    }
`

export {BannerComponent}