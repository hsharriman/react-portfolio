import React from "react"
import {Link} from "gatsby"

export default function BackButton() {
    return (
        <div className="back projicon">
            <img className="backarr" src={require('../../static/gifs/cursors/backs.gif')} alt="" />
            <Link to="/" style={{"fontWeight": "300"}}>back</Link>
        </div>
    );
}