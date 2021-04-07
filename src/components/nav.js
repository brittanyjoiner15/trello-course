import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';


function TopNav() {
    return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home"><img src="https://trello-attachments.s3.amazonaws.com/5ed979e77bb1106caad412b8/606d0cbc2643cd15ad3454c0/e5832634fd3a96de9b5aaa26a8f7e446/Screen_Shot_2021-04-06_at_6.20.32_PM.png" width="100px"></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="https://howbritseesit.wordpress.com/about-me/">About Me</Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
        </Nav>
        {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
        </Form> */}
    </Navbar.Collapse>
    </Navbar>
    );
}

export default TopNav;
