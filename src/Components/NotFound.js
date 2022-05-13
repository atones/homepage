import React from "react";
import NotfoundImage from "../images/notfound.jpg"

function NotFound() {
    return (
        <div className="error-page">
            <h2>Page not found.</h2>
            <h4>This is not the web page you are looking for.</h4>

            <img className="error-page-img" alt="notfound" src={NotfoundImage}></img>

        </div>


    )
}

export default NotFound;