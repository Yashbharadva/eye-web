import React from "react";

import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";

import { FaFacebookF } from "react-icons/fa";

import './facebook.styles.scss';


const Facebook = () => {
    return(
        <div className="facebook">
            <div className="but-face">
            <FaFacebookF />
                Continue with Facebook
            </div>
            <div className="but-goo">
            <AiOutlineGoogle />
                Continue with Google
            </div>
            <div className="but-git">
            <AiFillGithub />
                Continue with Github
            </div>
            <div className="or-style">
                Or
            </div>
        </div>
    )
}

export default Facebook;