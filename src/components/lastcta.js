import { Container, Row, Col, Button } from 'react-bootstrap';


function Last() {
    return (
        <Container className="Hero">
            <Row>
                <Col> <h1>Final CTA </h1></Col>
            </Row>
            <Row>
                <Col> <p>More text goes here. Direct people wherever you want.</p></Col>
            </Row>
            <Row>
                <Col><Button className="btn btn-primary">You Want To Click Something</Button></Col>
            </Row>
        </Container>
   
    );
}

export default Last;


