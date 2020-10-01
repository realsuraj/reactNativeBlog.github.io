import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import web from "./images/home_svg.png"
const Home = () => {
    return(
        <>
            <Common name="Grow your business" imgsrc={web} visit="/about" btnname="Get Started"/>
        </>
    )
}

export default Home;