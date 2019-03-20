import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSubreddits } from '../actions/subredditActions';
import SubredditCardList from '../components/Subreddits/SubredditCardList';
import { addToUserFeed, removeFromUserFeed, authenticateUser } from '../actions/userActions';
import { bindActionCreators } from 'redux';
import Loading from '../components/Loading';


class SubredditDisplay extends Component {
    componentDidMount() {
        // on mount we fetch the subreddits to load the cards on Home route
        this.props.fetchSubreddits()
    }

    loadSubreddits = () => {
        // conditional rendering based on subreddits load status
        if (this.props.subreddits.length > 1) {
        return <SubredditCardList subreddits={this.props.subreddits} addToUserFeed={this.props.addToUserFeed} removeFromUserFeed={this.props.removeFromUserFeed} feed={this.props.feed}/>
        }
        else {
            return <Loading />
        }
    }

    render() {
        return (
            <div className="srList">
                <h4>Check Out the Most Popular Subreddits:</h4>
                {this.loadSubreddits()}
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