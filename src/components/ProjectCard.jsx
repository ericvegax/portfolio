import React from "react";
import getWebScreenshot from "../util/flash.js";

function ProjectCard(props) {
    return (
        <a href={props.link} className={"project__card"}>
            <img className={"project__img"} src={props.imageSrc} alt={""} />
            <div className={"project__text"}>
                <h3 className={"project__title"}>{props.title}</h3>
                <p className={"project__description"}>{props.description}</p>
            </div>
        </a>
    );
}

function createProjectCard(project) {
    return (<ProjectCard key={project.id} title={project.title} imageSrc={project.imageSrc} description={project.description} link={project.link} />)
}

function getProjects() {
    return projects;
}

const projects = [
    {
        id: 1,
        title: "Simon",
        imageSrc: getWebScreenshot("https://simon-game-showcase.vercel.app/"),
        description: "HTML, CSS, JQuery",
        link: "https://github.com/ericvegax/simon"
    },
    {
        id: 2,
        title: "Portfolio",
        imageSrc: getWebScreenshot("https://www.ericvega.dev"),
        description: "React & Sass",
        link: "https://github.com/ericvegax/portfolio"
    },
    {
        id: 3,
        title: "TinDog",
        imageSrc: getWebScreenshot("https://tindog-showcase.vercel.app/"),
        description: "Bootstrap",
        link: "https://github.com/ericvegax/TinDog"
    }
];

export default ProjectCard;

export {
    createProjectCard,
    getProjects
}