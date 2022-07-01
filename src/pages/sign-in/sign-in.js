import React from "react";
import AnotherNavbar from "../../component/sign-in-com/anotherNav/another";
import Facebook from "../../component/sign-in-com/facbook/facbook";
import Navigation from "../../component/sign-in-com/signInBar/signInFor";
import TitleForSignup from "../../component/sign-in-com/title-for-signup/title-for-signup";
import Alaccount from "../../component/sign-in-com/al-account/al-account";


const signUp = () => {
    return(
        <div className="sign-in">
            <AnotherNavbar />
            <Navigation />
            <Facebook />
            <TitleForSignup />
            <Alaccount />
        </div>
    )
}

export default signUp;