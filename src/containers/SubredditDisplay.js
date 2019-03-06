import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSubreddits } from '../actions/subredditActions';
import SubredditCardList from '../components/Subreddits/SubredditCardList';
import { addToUserFeed, removeFromUserFeed, authenticateUser } from '../actions/userActions';
import { bindActionCreators } from 'redux';


class SubredditDisplay extends Component {
    componentDidMount() {
        this.props.fetchSubreddits()
    }

    render() {
        return (
            <div className="srList">
                <h4>Check Out the Most Popular Subreddits:</h4>
                <SubredditCardList subreddits={this.props.subreddits} addToUserFeed={this.props.addToUserFeed} removeFromUserFeed={this.props.removeFromUserFeed} feed={this.props.feed}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        subreddits: state.subreddits.subreddits,
        feed: state.user.feed
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchSubreddits, 
    addToUserFeed, 
    removeFromUserFeed, 
    authenticateUser
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SubredditDisplay);