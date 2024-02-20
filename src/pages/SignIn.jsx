import React from "react";
import styles from "./SignIn.module.css";
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignIn = () => {
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
          <form>
            {/* <div>
              <Label value="Your Username"></Label>
              <TextInput type="text" placeholder="Username" id="username" />
            </div> */}
            <div>
              <Label value="Your Email"></Label>
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Your Passowrd"></Label>
              <TextInput type="password" placeholder="Passowrd" id="passowrd" />
            </div>
            <Button
              className={styles.btn}
              gradientDuoTone="purpleToPink"
              type="submit"
            >
              Sign In
            </Button>
          </form>
          <div className="my-2">
            <span>Don&apos;t have an account? </span>
            <Link className={styles.color} to="/sign-up">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
