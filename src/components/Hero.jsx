import React from "react";
function Hero(props) {
    if (props.span === null) {
        return (
            <div className={"container hero"}>
                <h2>{props.title}</h2>
                <a href={"#"}>{props.button}</a>
            </div>
        );
    } else {
        return (
            <div className={"container hero"}>
                <h2><span>{props.span}</span> {props.title}</h2>
                <a href={"#"}>{props.button}</a>
            </div>
        );
    }
}
export default Hero;