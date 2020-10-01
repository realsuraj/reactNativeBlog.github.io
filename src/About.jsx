import React from "react";
import Common from "./Common";
import web from "./images/img2.png"

const About = () => {
    return(
        <>
            <Common name="Welcome to about page" imgsrc={web} visit="/contact" btnname="Contact now"/>

        </>
    )
}

export default About;