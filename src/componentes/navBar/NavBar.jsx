import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import CartWidget from "../CartWidget";

import "../navBar/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Hail Electronica</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navBar__item justify-content-end flex-grow-1 pe-3">
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
            <Link to="/category/Notebooks" style={{ textDecoration: "none" }}>
              Notebooks
            </Link>
            <NavDropdown title="Electronica" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link
                  to="/category/Celulares"
                  style={{ textDecoration: "none" }}
                >
                  Celulares
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/Tablets" style={{ textDecoration: "none" }}>
                  Tablets
                </Link>{" "}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <NavLink className={({ isActive }) => "carrito"} to="cart">
            <CartWidget />
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
