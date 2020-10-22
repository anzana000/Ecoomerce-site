import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignup from "./pages/signInAndSignup/signInAndSignup.component";
import Header from "./Components/header/header.component";
import { auth, createUserDocumentProfile } from "./firebase/firebase.utils";
import {connect} from "react-redux";
import setCurrentUser from "./redux/user/user.action";

class App extends React.Component {

  unsubscribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDocumentProfile(userAuth);
        userRef.onSnapshot((snapShot) => {
         setCurrentUser ({id: snapShot.id,
           ...snapShot.data()
           });
           });
          }
         
          
          setCurrentUser(userAuth)
           });
      }
      

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signIn" component={SignInAndSignup} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => 
    dispatch(setCurrentUser(user))
})
export default connect(null,mapDispatchToProps)(App);
