import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const Menu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>CandyPay</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">회사소개</Nav.Link>
                        {/* <Nav.Link as={Link} to="/shop/shopList">가맹정</Nav.Link> */}
                        <Nav.Link as={Link} to="/help">고객지원</Nav.Link>
                        <Nav.Link as={Link} to="/certificate">공동인증서 관리</Nav.Link>
                        {/* <Nav.Link as={Link} to="/shop/manage">매장관리</Nav.Link> */}
                        {/* <Nav.Link as={Link} to="/shop/login">가맹점 로그인</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu;