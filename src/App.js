import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignup from "./pages/signInAndSignup/signInAndSignup.component";
import Header from "./Components/header/header.component";
import { auth, createUserDocumentProfile } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUserState: null,
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDocumentProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState(
            { currentUserState: snapshot.id, ...snapshot.data() },
            () => {
              console.log(this.state);
            }
          );
          this.setState({ currentUserState: userAuth });
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUserState={this.state.currentUserState} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signIn" component={SignInAndSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
