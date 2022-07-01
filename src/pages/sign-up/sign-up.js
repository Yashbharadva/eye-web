import React from "react";
import AnotherNavbar from "../../component/sign-up-com/anotherNav/another";
import Facebook from "../../component/sign-up-com/facbook/facbook";
import Navigation from "../../component/sign-up-com/signUpBar/signUpFor";
import TitleForSignup from "../../component/sign-up-com/title-for-signup/title-for-signup";
import Alaccount from "../../component/sign-up-com/al-account/al-account";
import './sign-up.styles.scss';


const signUp = () => {
    return(
        <div className="sign-up">
            <AnotherNavbar />
            <Navigation />
            <Facebook />
            <TitleForSignup />
            <Alaccount />
        </div>
    )
}

export default signUp;