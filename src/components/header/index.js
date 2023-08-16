import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState, useEffect } from "react";
import AppButton from "../button";

function AppHeader() {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 600) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []); // Adding an empty dependency array ensures the event listener is added and removed properly

  const handleResize = () => {
    if (window.innerWidth < 992) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // const [colorChange, setColorchange] = useState(false);
  // const changeNavbarColor = () => {
  //   if (window.scrollY >= 700 ) {
  //     setColorchange(true);
  //   } else {
  //     setColorchange(false);
  //   }
  // };
  // window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={colorChange ? "navbar colorChange " : "navbar "}
        variant={colorChange ? "dark" : "light"}
      >
        <Container>
          <Navbar.Brand href="#home" className="text-white fs-3 fw-bolder" >Navbar</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav "
            style={{ borderColor: colorChange ? "#fff" : "#000" }}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ps-lg-auto ps-5">
              <Nav.Link href="#home" className="px-3" >Home</Nav.Link>
              <Nav.Link href="#service" className="px-3">Service</Nav.Link>
              <Nav.Link href="#features" className="px-3">Features</Nav.Link>
              <Nav.Link href="#pricing" className="px-3">Pricing</Nav.Link>
              <Nav.Link href="#team" className="px-3">Team</Nav.Link>
              <Nav.Link href="#blog" className="px-3">Blog</Nav.Link>
              <Nav.Link href="#contact" className="px-3">Contact</Nav.Link>
            </Nav>
            <Nav>
              <AppButton title="Try it Free" 
              borderRadius={'35px'}
              backgroundColor={"#fb3e3e"}
              color={"#ffffff"}
              height={'8vh'}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppHeader;
