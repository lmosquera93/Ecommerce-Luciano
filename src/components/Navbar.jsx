import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar className="custom-navbar-pink">
      <Container>
        <Navbar.Brand href="#">Locamania Indumentaria</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Remeras</Nav.Link>
          <Nav.Link href="#">Vestidos</Nav.Link>
          <Nav.Link href="#">Jeans</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
