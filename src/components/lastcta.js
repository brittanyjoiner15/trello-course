import { Container, Row, Col, Button } from 'react-bootstrap';


function Last() {
    return (
        <Container className="Hero my-5 py-5">
            <Row>
                <Col> <h1>Can't Wait For a Course? </h1></Col>
            </Row>
            <Row>
                <Col> <p>Sign up for my substack and get Trello tips and tricks in your inbox each week.</p></Col>
            </Row>
            <Row>
                <Col><a href="https://trello.substack.com/p/coming-soon" target="_blank"><Button className="btn btn-primary">Get Trello Weekly</Button></a></Col>
            </Row>
        </Container>
   
    );
}

export default Last;


