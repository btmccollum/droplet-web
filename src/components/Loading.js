import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Loading = props => {  
    return (
        <React.Fragment>
            <Container className="h-100">
                <Row className="d-flex justify-content-center w-100 h-100 align-items-center">
                    <Col md={{ span: 12 }} className="loadingNotice">
                        <span>Loading...</span>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Loading;