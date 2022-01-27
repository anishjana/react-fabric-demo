import React from "react";
import { Navbar as NB, Container, Nav } from "react-bootstrap";

export default function Navbar({canvas}) {

  const clear = () =>{
    canvas.clear()
  }
  return (
    <>
      <NB bg="dark" variant="dark">
        <Container>
          <NB.Brand href="#home">React Fabric</NB.Brand>
          <Nav>
            <Nav.Link href="" onClick={clear}>Clear Canvas</Nav.Link>
          </Nav>
        </Container>
      </NB>
    </>
  );
}
