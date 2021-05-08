import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { login, logout } from "./actions/auth";
import "./styles/styles.scss";
import { auth } from "./vendors/firebase";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));

auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    history.push("/dashboard");
  } else {
    store.dispatch(logout());
    history.push("/");
  }
});
