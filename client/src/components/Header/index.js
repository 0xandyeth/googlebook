import React from "react";
import style from "./style.css";

function Header() {
    return (
        <div className="jumbotron text-center">
            <div className="container text-light container-top">
                <h1 style={{fontFamily:'fantasy',fontWeight:'bold',fontSize:48}}>Google Books Search</h1>
            </div>
        </div>
    );
}

export default Header;
