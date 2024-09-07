import React, { useState, useReducer, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import AuthContext from "../context/authContext";

const reducer = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return { ...state, emailValue: action.payload };
  }
  if (action.type === "PASS_INPUT") {
    return { ...state, passwordValue: action.payload };
  }
  return { emailValue: "", passwordValue: "" };
};

const Login = ({onLogin}) => {
  const ctx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);

  const [state, dispatch] = useReducer(reducer, {
    emailValue: "",
    passwordValue: "",
  });

  const { emailValue: email, passwordValue: password} = state;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("CHECKING FORM VALIDITY");
      setFormIsValid(email.includes("@") && state.password.trim().length > 6);
    }, 500);
    return () => {
      console.log("CLEANUP HERE");
      clearTimeout(identifier);
    };
  }, [email, password]);


  const emailChangeHandler = (e) => {
    dispatch({ type: "EMAIL_INPUT", payload: e.target.value });
  
  };

  const passwordChangeHandler = (e) => {
    dispatch({ type: "PASS_INPUT", payload: e.target.value });
    
  };

  const signIn = (e) => {
    e.preventDefault();
    console.log("ENTERED Email: ", state.emailValue);
    console.log("ENTERED Password: ", state.passwordValue);
    ctx.onLogin(state.emailValue, state.passwordValue);
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png"
          alt="Amazon Logo"
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={state.emailValue}
            onChange={emailChangeHandler}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={state.passwordValue}
            onChange={passwordChangeHandler}
          />
          <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notioe and our
          Interest-Based Ads Notice
        </p>
        <button className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
