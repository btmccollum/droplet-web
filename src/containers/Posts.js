import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import PostList from '../components/Posts/PostList';
import { Container, Row, Col, ButtonToolbar, ButtonGroup, DropdownButton, Dropdown, Button } from 'react-bootstrap';

class Posts extends Component {

    componentDidMount() { 
        this.props.fetchPosts();
    }

    componentDidUpdate() {
        this.loadPosts()
    }

    loadPosts = () => {
        if (this.props.posts.length > 0) {
            return (<PostList posts={this.props.posts}/>)
        }
        else {
            return (<span>Loading...</span> )
        }
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col md={{ span: 8, offset: 2}}>
                        <ButtonToolbar aria-label="Toolbar with sorting options">
                        <ButtonGroup className="mr-12" aria-label="sorting options">
                            <Button>1</Button>
                            <Button>2</Button>
                            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                                <Dropdown.Item eventKey="1" onClick={() => this.sortPosts()}>Controversial</Dropdown.Item>
                                <Dropdown.Item eventKey="2" onClick={() => this.sortPosts()}>Hot</Dropdown.Item>
                                <Dropdown.Item eventKey="3" onClick={() => this.sortPosts()}>New</Dropdown.Item>
                                <Dropdown.Item eventKey="4" onClick={() => this.sortPosts()}>Rising</Dropdown.Item>
                                <Dropdown.Item eventKey="5" onClick={() => this.sortPosts()}>Top</Dropdown.Item>
                            </DropdownButton>
                            </ButtonGroup>
                        </ButtonToolbar>
                        </Col>
                    </Row>
                </Container>
                <div className="postListContainer">
                    {this.loadPosts()}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(Posts);