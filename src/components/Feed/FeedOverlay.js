import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeFromUserFeed } from '../../actions/userActions';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import cuid from 'cuid';


class FeedOverlay extends Component {
    render() {
        const feeds = this.props.feed.map(subreddit => { 
            return ( 
              <li key={cuid()}>{subreddit} <Button variant="link" size="sm" onClick={() => this.props.removeFromUserFeed(subreddit)}>(Remove)</Button></li> 
            ) 
        });

        const popover = (
            <Popover id="popover-basic" title="My Droplet Feed:">
              {feeds}
            </Popover>
        );
        
        return (
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <Button variant="secondary">What's in my feed?</Button>
            </OverlayTrigger>
        )
    }
}

const mapStateToProps = state => {
    return {
        feed: state.user.feed
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    removeFromUserFeed
  }, dispatch)
  
export default connect(mapStateToProps, mapDispatchToProps)(FeedOverlay);