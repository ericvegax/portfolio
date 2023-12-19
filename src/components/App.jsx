import React from "react";
import Hero from "./Hero.jsx";
import {createProjectCard, getProjects} from "./ProjectCard.jsx";
import Footer from "./Footer.jsx";

function App() {
    return (
        <div className={"container"}>
            <Hero span={"I'm Eric"} title={", a Passionate Web Artisan Crafting Digital Solutions."}
                  button={"let's get in touch."}/>

            <div className={"container section__title__wrapper"}>
                <h2 className={"section__title"}>My Projects.</h2>
            </div>

            <div className={"container project__section"}>

                <div className={"container project__wrapper"}>
                    {getProjects().map(createProjectCard)}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default App;
