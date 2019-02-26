import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SubredditDisplay from '../containers/SubredditDisplay';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col className="homepageContainer">
                    <h2>Welcome to Droplet for Reddit!</h2>
                    <NavLink to="/posts"><Button variant="primary">Get Started</Button></NavLink>
                    <SubredditDisplay />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;