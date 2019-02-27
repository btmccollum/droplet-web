import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const SubredditCard = props => {
    const subreddit = props.subreddit;

    return (
        <Col md={{ span: 4, offset: 0 }} className="">
            <Card className="subredditCard">
                <Card.Img variant="top" src={subreddit.icon_img ? subreddit.icon_img : process.env.PUBLIC_URL + '45332556-wassertropfen-umriss-symbol-modern-minimal-flache-design-stil-vektor-illustration.jpg'} />
                <Card.Body>
                    <Card.Title>{subreddit.display_name_prefixed}</Card.Title>
                    <Card.Text>{subreddit.public_description}</Card.Text>
                    <Button variant="primary" onClick={() => props.addToUserFeed(subreddit.display_name)}>Add To Feed</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SubredditCard;