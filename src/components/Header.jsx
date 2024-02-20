import React from "react";
import styles from "./Header.module.css";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <Navbar className={styles.container}>
      <Link to="/">
        <span className={styles.logo}>Dinesh's</span>
        <strong>Blog</strong>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="search..."
          rightIcon={AiOutlineSearch}
        />
      </form>

      <Navbar.Collapse>
        <Navbar.Link as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
      <Link to="/sign-in">
        <Button gradientDuoTone="purpleToBlue" pill outline>
          Sign In
        </Button>
      </Link>
    </Navbar>
  );
};

export default Header;
