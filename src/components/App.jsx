import React from "react";
import Hero from "./Hero.jsx";
import Footer from "./Footer.jsx";
function App() {
    return (
        <div className={"container"}>
            <Hero span={"I'm Eric"} title={", a Passionate Web Artisan Crafting Digital Solutions."} button={"let's get in touch."} />
            <Footer />
        </div>
    )
}
export default App;
