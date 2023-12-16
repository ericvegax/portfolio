import React from "react";

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
export default ProjectCard;