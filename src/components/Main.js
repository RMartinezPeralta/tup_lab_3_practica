import React from "react";
import Body from "./Body";

const Main = ({pageBody}) => {
    return (
        <div>
            <Body
            body={pageBody}
            />
            <nav>
                <ul>
                    <li>
                        <a href="https://www.google.com.ar" target="_blanck" rel="noreferrer">Google</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com" target="_blanck" rel="noreferrer">YouTube</a>
                    </li>
                </ul>
            </nav>
            <div>
                <br></br>
                <p> <b>asd</b>
                    This is a space where you can add things you know..
                </p>
            </div>
        </div>
    )

}
export default Main;