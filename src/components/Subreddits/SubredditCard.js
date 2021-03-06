import React from 'react';
import { Card, Button } from 'react-bootstrap';

// handing display for button
const buttonVariant = props => {
    const subreddit = props.subreddit;

    if (props.feed.includes(subreddit.display_name.toLowerCase())) {
        return (
            <Button 
                variant="outline-secondary"
                onClick={() => props.removeFromUserFeed(subreddit.display_name.toLowerCase())}> 
                Remove From Feed </Button>
        )
    }
    else if (subreddit.over18 === true) {
        return (
            <Button 
                variant="danger"
                onClick={() => props.addToUserFeed(subreddit.display_name.toLowerCase())}>
                NSFW - Add To Feed
            </Button>
        )
    }
    else {
        return (
            <Button 
                variant="primary"
                onClick={() => props.addToUserFeed(subreddit.display_name.toLowerCase())}>
                Add To Feed
            </Button>
        )
    }
}

// responsible for display of subreddit cards
const SubredditCard = props => {
    const subreddit = props.subreddit;

    return (
        <Card className="subredditCard p-3">
            <Card.Img variant="top" src={subreddit.icon_img ? subreddit.icon_img : process.env.PUBLIC_URL + '45332556-wassertropfen-umriss-symbol-modern-minimal-flache-design-stil-vektor-illustration.jpg'} />
            <Card.Body>
                <Card.Title>{subreddit.display_name_prefixed}</Card.Title>
                <Card.Text className="mb-2 text-muted">{subreddit.public_description}</Card.Text>
                {buttonVariant(props)}
            </Card.Body>
        </Card>
    )
}

export default SubredditCard;