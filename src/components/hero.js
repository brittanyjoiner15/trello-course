import { Container, Row, Col, Button, Jumbotron } from 'react-bootstrap';


function Hero() {
    return (
        <Container>
            <Jumbotron>
            <h1>Trello Tips and Tricks</h1>
            <p>
                If you want to improve your productivity and workflows with Trello, you've come to the right place. 
                Whether you're a Trello expert, or never heard of it and just looking for something to help keep your life in order, 
                I've got tips and tricks to help you stop feeling overwhelmed and be able to accomplish what's on your plate.
            </p>
            <p>
                I'm going to develop some courses. Which are you most interested in? Sign up to be on the waitlist 
                and notified once they're ready. I'll make the one with the most sign ups first, but you're welcome to
                sign up for both!
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
            </Jumbotron>
        </Container>
   
    );
}

export default Hero;
