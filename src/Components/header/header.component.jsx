import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/logo.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Header = ({ currentUserState }) => (
  <div className="header">
    <div className="logo-container">
      <Link to="/" className="logo">
        <Logo />
      </Link>
    </div>
    <div className="pages">
      <Link to="/shop" className="page">
        SHOP
      </Link>
      <Link to="/contact" className="page">
        CONTACT
      </Link>
      {currentUserState ? (
        <div className="page" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/signin" className="page">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUserState: state.user.currentUserState,
});
export default connect(mapStateToProps)(Header);
