import React from "react";
import Hero from "./Hero.jsx";
import ProjectCard from "./ProjectCard.jsx";
import Footer from "./Footer.jsx";
import getWebScreenshot from "../util/flash.js";

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

                    <ProjectCard title={"Simon"}
                                 imageSrc={getWebScreenshot("https://simon-game-showcase.vercel.app/")}
                                 description={"HTML, CSS, JQuery"}
                                 link={"https://github.com/ericvegax/simon"}/>

                    <ProjectCard title={"Portfolio"}
                                 imageSrc={getWebScreenshot("https://www.ericvega.dev")}
                                 description={"React & Sass"}
                                 link={"https://github.com/ericvegax/portfolio"}/>

                    <ProjectCard title={"TinDog"}
                                 imageSrc={getWebScreenshot("https://tindog-showcase.vercel.app/")}
                                 description={"Bootstrap"}
                                 link={"https://github.com/ericvegax/TinDog"}/>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default App;
