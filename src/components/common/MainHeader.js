import React from "react"
import {Link} from "react-router-dom";

function MainHeader() {
    return (
        <div align="right">
            <Link to="/signin">로그인</Link>
        </div>
    )
}


export default MainHeader;