import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSubreddits } from '../actions/subredditActions';
import SubredditCardList from '../components/Subreddits/SubredditCardList';
import { addToUserFeed } from '../actions/userActions';
import { userInfo } from 'os';


class SubredditDisplay extends Component {
    componentDidMount() {
        this.props.fetchSubreddits()
    }

    // addToUserFeed = () => {
    //     const baseUrl = 'https://localhost:3000/api/v1'

        // const data = {
        //     body: JSON.stringify({ user })
        // }
    // }

    render() {
        return (
            <div className="srList">
                Check Out the Most Popular Subreddits:
            
                <SubredditCardList subreddits={this.props.subreddits} addToUserFeed={this.props.addToUserFeed} />
                <button onClick={() => console.log(this.props.user)}>Test</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        subreddits: state.subreddits.subreddits,
        // for testing:
        user: state.user,
        feed: state.user.feed  
    }
}

export default connect(mapStateToProps, { fetchSubreddits, addToUserFeed })(SubredditDisplay);