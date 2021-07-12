import React, { useEffect, useContext } from "react";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import "./styles/app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import FanficPage from "./components/FanficPage";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import TagsList from "./components/TagsList";
import FandomsList from "./components/FandomsList";
import CategoriesList from "./components/CategoriesList";
import AllUsers from "./components/AllUsers";
import ActivationPage from "./components/ActivationPage";
import FanficCreate from "./components/FanficCreate";

function App(props) {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, [store]);

  localStorage.setItem("theme", "light");

  const { history } = props;

  return (
    <div className="app light">
      <Header />
      <Switch>
        <Route history={history} exact path="/" component={MainPage} />
        <Route history={history} exact path={`/fanfic/:_id`} component={FanficPage} />
        <Route history={history} exact path="/login" component={LoginForm} />
        <Route history={history} exact path="/registration" component={RegistrationForm} />
        <Route history={history} exact path={`/profile/` + store.user.username} component={() => {
          return <UserProfile user={store.user}/>
        }} />
        <Route history={history} exact path="/tags" component={TagsList} />
        <Route history={history} exact path="/fandoms" component={FandomsList} />
        <Route history={history} exact path="/categories" component={CategoriesList} />
        <Route history={history} exact path="/users" component={AllUsers} />
        <Route history={history} exact path="/activation" component={ActivationPage} />
        <Route history={history} exact path="/create" component={FanficCreate} />
      </Switch>
      <Footer />
    </div>
  );
}

export default observer(App);
