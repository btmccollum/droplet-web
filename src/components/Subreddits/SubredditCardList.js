import React from 'react';
import SubredditCard from './SubredditCard';
import cuid from 'cuid';
import { CardColumns } from 'react-bootstrap';

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
        <CardColumns className="subredditCards mx-auto">
            {subredditList}
        </CardColumns>
    )
}

export default SubredditCardList;

