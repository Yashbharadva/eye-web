import React from "react";
import AnotherNavbar from "../../component/sign-up-com/anotherNav/another";
import Facebook from "../../component/sign-up-com/facbook/facbook";
import Navigation from "../../component/sign-up-com/signUpBar/signUpFor";
import './sign-up.styles.scss';


const signUp = () => {
    return(
        <div className="sign-up">
            <AnotherNavbar />
            <Navigation />
            <Facebook />
        </div>
    )
}

export default signUp;