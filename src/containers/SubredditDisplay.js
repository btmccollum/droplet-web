import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSubreddits } from '../actions/subredditActions';
import SubredditCardList from '../components/Subreddits/SubredditCardList';


class SubredditDisplay extends Component {
    componentDidMount() {
        this.props.fetchSubreddits()
    }

    render() {
        return (
            <div className="srList">
                Check Out the Most Popular Subreddits:
            
                <SubredditCardList subreddits={this.props.subreddits} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        subreddits: state.subreddits.subreddits
    }
}

export default connect(mapStateToProps, { fetchSubreddits })(SubredditDisplay);