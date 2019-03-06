import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const buttonVariant = props => {
    const subreddit = props.subreddit;

    if (props.feed.includes(subreddit.display_name)) {
        return (
            <Button 
                variant="outline-secondary"
                onClick={() => props.removeFromUserFeed(subreddit.display_name)}> 
                Remove From Feed </Button>
        )
    }
    else if (subreddit.over18 === true) {
        return (
            <Button 
                variant="danger"
                onClick={() => props.addToUserFeed(subreddit.display_name)}>
                NSFW - Add To Feed
            </Button>
        )
    }
    else {
        return (
            <Button 
                variant="primary"
                onClick={() => props.addToUserFeed(subreddit.display_name)}>
                Add To Feed
            </Button>
        )
    }
}

const SubredditCard = props => {
    const subreddit = props.subreddit;

    return (
        <Col md={{ span: 4, offset: 0 }} className="">
            <Card className="subredditCard">
                <Card.Img variant="top" src={subreddit.icon_img ? subreddit.icon_img : process.env.PUBLIC_URL + '45332556-wassertropfen-umriss-symbol-modern-minimal-flache-design-stil-vektor-illustration.jpg'} />
                <Card.Body>
                    <Card.Title>{subreddit.display_name_prefixed}</Card.Title>
                    <Card.Text>{subreddit.public_description}</Card.Text>
                    {buttonVariant(props)}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SubredditCard;