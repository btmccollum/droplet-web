import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions/commentActions';
import PostList from '../components/Posts/PostList';
import { Container, Row, Col, ButtonToolbar, ButtonGroup, DropdownButton, Dropdown, Button } from 'react-bootstrap';

class Comments extends Component {
    componentDidMount() { 
        this.props.fetchComments(this.props.post);
    }
    
    // loadComments = () => {
    //     if (this.props.comments.length > 0) {
    //         return (<CommentList comments={this.props.comments}/>)
    //     }
    //     else {
    //         return (<span>Loading...</span> )
    //     }
    // }

    render() {
        return (
            <div>
                {/* <CommentList /> */}
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps, { fetchComments })(Comments);