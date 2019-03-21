import React from 'react'
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SubredditDisplay from '../containers/SubredditDisplay';
import SubredditSearch from '../containers/SubredditSearch';
import FeedOverlay from './Feed/FeedOverlay';

const Home = () => {
    // Display for home page 
    return (
        <Container>
            <Row>
                <Col className="homepageContainer">
                    <h2>Welcome to Droplet for Reddit!</h2>

                    <ButtonGroup aria-label="home page feed options">
                        <NavLink to="/posts"><Button variant="secondary" className="feedButtonLeft">Go to Feed</Button></NavLink>
                        <FeedOverlay />
                    </ButtonGroup>

                    <h4>Add a subreddit by name:</h4>

                    <SubredditSearch />
                    <SubredditDisplay />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;