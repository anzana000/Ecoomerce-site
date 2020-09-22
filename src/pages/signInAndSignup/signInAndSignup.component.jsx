import React from "react";
import "./signInAndSignup.styles.scss";
import SignIn from "../../Components/signIn/signIn.component";
import SignUp from "../../Components/sign-up/sign-up.component";

const SignInAndSignup = () => (
  <div className="signInAndSignup">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignup;
