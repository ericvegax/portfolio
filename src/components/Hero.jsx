import React from "react";

function Hero(props) {
    return (props.span === null ?
        <div className={"container hero"}>
            <h2>{props.title}</h2>
            <a href={"#contact"}>{props.button}</a>
        </div> :

        <div className={"container hero"}>
            <h2><span>{props.span}</span> {props.title}</h2>
            <a href={"#contact"}>{props.button}</a>
        </div>)
}

export default Hero;