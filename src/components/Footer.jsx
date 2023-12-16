import React from "react";
function Footer(props) {
    return (
        <div className={"container footer__wrapper"} id={"contact"}>
            <a className={"footer__item"} href={"https://discord.com/users/1038523288923685024"}><i className="fa-brands fa-discord"></i> <span>@noxdigital</span></a>
            <a className={"footer__item"} href={"https://twitter.com/noxdigital_"}><i className="fa-brands fa-x-twitter"></i> <span>@noxdigital_</span></a>
            {/*<a className={"footer__item"} href={"mailto: ericvegax24@gmail.com"}><i className="fa-regular fa-envelope"></i> <span>Coming Soon</span></a>*/}
        </div>
    )
}
export default Footer;