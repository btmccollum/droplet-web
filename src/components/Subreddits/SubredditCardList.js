import React from 'react';
import SubredditCard from './SubredditCard';
import cuid from 'cuid';
import { CardColumns, Container, Row } from 'react-bootstrap';

const SubredditCardList = props => {
    const subredditList = props.subreddits.map(subreddit => <SubredditCard key={cuid()} subreddit={subreddit.data} addToUserFeed={props.addToUserFeed} removeFromUserFeed={props.removeFromUserFeed} feed={props.feed}/>)

    return (
        <CardColumns className="subredditCards mx-auto justify-content-center" sm={4}>
            {subredditList}     
        </CardColumns>
    )
}

export default SubredditCardList;

