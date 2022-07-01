import React from "react";
import { Link } from "react-router-dom";

import './al-account.styles.scss';

const Alaccount = () => {
    return (
        <div className="al-account">
            <div className="already">
                Already have an account?
            <Link className="button-in" to="sign-in">
                Sign in 
            </Link>
            </div>
        </div>
    )
}

export default Alaccount;