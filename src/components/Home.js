import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SubredditDisplay from '../containers/SubredditDisplay';
import SubredditSearch from '../containers/SubredditSearch';

const Home = () => {
    // Display for home page 
    return (
        <Container>
            <Row>
                <Col className="homepageContainer">
                    <h2>Welcome to Droplet for Reddit!</h2>
                    <NavLink to="/posts"><Button variant="primary">Get Started</Button></NavLink>
                    <h4>You can also add a Subreddit by name:</h4>
                    <SubredditSearch />
                    <SubredditDisplay />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;