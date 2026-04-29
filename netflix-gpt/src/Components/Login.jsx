import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidate } from "../utils/Validate";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { userImg } from "../utils/Constants";

const Login = () => {
  const navigate = useNavigate();
  let disPatch = useDispatch();
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleValid = () => {
    let message = checkValidate(email.current.value, password.current.value);
    // console.log(email);
    // console.log(password);
    console.log(message);

    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName.current.value,
            photoURL: userImg,
          })
            .then(() => {
              const { uid, email, displayName,photoURL}=auth.currentUser;
              disPatch(
                addUser({ id: uid, email: email, displayName: displayName,photoURL:photoURL }),
              );
      
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log("create", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("signin", user);
        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b9448d14-5983-4ffc-a4d6-e22223108466/web/IN-en-20260302-TRIFECTA-perspective_1ef91182-c674-4632-9bec-d185993ab154_large.jpg"
          alt=""
        />
      </div>
      <form
        className="w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="font-bold text-3xl p-5 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={userName}
            type="text"
            placeholder="Your Name"
            className="p-2 my-2  w-full bg-gray-700 "
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email address"
          className="p-2 my-2  w-full bg-gray-700 "
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2  w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-m py-1  ">{errorMessage}</p>
        <button className="p-3 my-4 bg-red-700 w-full" onClick={handleValid}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix ? Sign up now"
            : "Already registered? Sign in Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
