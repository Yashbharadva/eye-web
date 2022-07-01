import React from "react";
import { Link } from "react-router-dom";

import './al-account.styles.scss';

const Alaccount = () => {
    return (
        <div className="al-account">
            <div className="already">
                Don't have an account?
            <Link className="button-up" to="sign-up">
                Sign up 
            </Link>
            </div>
        </div>
    )
}

export default Alaccount;