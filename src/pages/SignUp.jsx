import React, { useRef } from "react";
import styles from "./SignUp.module.css";
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault(); //page is not refresh after we use event.prevent default
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Here you can do whatever you want with the captured data
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    // Reset form fields after submission
    usernameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.box1}>
          <span className={styles.logo}>Dinesh's</span>
          <strong className={styles.name}>Blog</strong>
          <p className={styles.para}>
            This is demo project. You can sign up with your email and password.
          </p>
        </div>
        <div className={styles.box2}>
          <form onSubmit={handleSubmit}>
            <div>
              <Label value="Your Username"></Label>
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                ref={usernameRef}
              />
            </div>
            <div>
              <Label value="Your Email"></Label>
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                ref={emailRef}
              />
            </div>
            <div>
              <Label value="Your Password"></Label>
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                ref={passwordRef}
              />
            </div>
            <Button
              className={styles.btn}
              gradientDuoTone="purpleToPink"
              type="submit"
            >
              Sign Up
            </Button>
          </form>
          <div className="my-2">
            <span>Have an account? </span>
            <Link className={styles.color} to="/sign-in">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
