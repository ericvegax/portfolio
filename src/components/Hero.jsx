import React from "react";
function Hero(props) {
    return (
        <div className={""}>
            <h2>{props.title}</h2>
            <a href={"#"}>{props.button}</a>
        </div>
    );
}
export default Hero;