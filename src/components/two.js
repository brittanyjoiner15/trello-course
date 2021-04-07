import { Container, Row, Col, Button, Accordion, Card, ListGroup } from 'react-bootstrap';


function Two() {
    return (
        <Container className="d-flex justify-content-center">
            <Row >
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://trello-attachments.s3.amazonaws.com/5ed979e77bb1106caad412b8/606d0cbc2643cd15ad3454c0/6f24dcc874b23ff57ef469d9637a8dba/danielle-rice-gGR221reh2U-unsplash.jpg" />
                    <Card.Body>
                        <Card.Title>Adulting Starter Pack</Card.Title>
                        <Card.Text className="my-5">
                            Course all about helping you use Trello for specific things in your life, 
                            like managing your home and meals, organizing your budget, 
                            finding a job, taking care of your car, organize tax docs, 
                            and other #adulting things
                            <ListGroup className="my-3">
                            <ListGroup.Item>Managing your finances</ListGroup.Item>
                            <ListGroup.Item>Finding a job</ListGroup.Item>
                            <ListGroup.Item>Moving to a new city</ListGroup.Item>
                            <ListGroup.Item>Spring cleaning</ListGroup.Item>
                            <ListGroup.Item>Using Trello with others</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                        <a href="https://form.typeform.com/to/ei2ro1W1"><Button variant="primary">Add me to the Trello Adulting Starter Pack waitlist</Button></a>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://trello-attachments.s3.amazonaws.com/5ed979e77bb1106caad412b8/606d0cbc2643cd15ad3454c0/889c9b0f6a1226e67baddfefd1a58239/image.png" />
                    <Card.Body>
                        <Card.Title>Trello Basics + Pro Tips</Card.Title>
                        <Card.Text className="my-5">
                       Course that starts out with simple "what is a board, card, list, etc" to give you an 
                       overview of Trello, but then get more pro tip content with adeep dive into 
                       core features of boards and cards. Then we'll go through key power-ups, templates, and 
                       Butler basics
                        <ListGroup className="my-3">
                        <ListGroup.Item>Trello overview</ListGroup.Item>
                        <ListGroup.Item>Secret tips and features</ListGroup.Item>
                        <ListGroup.Item>Essential Power-Ups</ListGroup.Item>
                        <ListGroup.Item>Useful templates</ListGroup.Item>
                        <ListGroup.Item>Automating your boards</ListGroup.Item>
                        </ListGroup>
                        </Card.Text>
                        <a href="https://form.typeform.com/to/gZsl2OaW"><Button variant="primary">Add me to the Trello Basics + Pro Tips waitlist</Button></a>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
   
    );
}

export default Two;



