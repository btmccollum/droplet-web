import React, { Component } from 'react';
import SubredditCard from './SubredditCard';
import cuid from 'cuid';
import { Container, Row, CardDeck, CardColumns } from 'react-bootstrap';

// class SubredditCardList extends Component {
//     render() {
//         const subredditList = this.props.subreddits.map(subreddit => <SubredditCard key={cuid()} subreddit={subreddit.data} />)
        
//         return (
//             <CardColumns>
//                 {subredditList}
//             </CardColumns>
//         )
//     }
// }

const SubredditCardList = props => {
    const subredditList = props.subreddits.map(subreddit => <SubredditCard key={cuid()} subreddit={subreddit.data} />)

    return (
        <CardColumns>
            {subredditList}
        </CardColumns>
    )
}

export default SubredditCardList;

