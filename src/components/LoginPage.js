import React from "react";
import { connect } from "react-redux";
import { startLogin, startLogout } from "../actions/auth";

const LoginPage = ({ startLogin, startLogout }) => (
  <div>
    <h1>Login</h1>
    <button onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
