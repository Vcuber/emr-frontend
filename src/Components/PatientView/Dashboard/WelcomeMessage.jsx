import React from 'react';
import './WelcomeMessage.css';
import {Container, Row, Col, Image} from 'react-bootstrap'
import user from '../user.jpg'

function WelcomeMessage() {
    return (
        <div className="welmsg">
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                    <h1>Welcome, *username*</h1>
                    </Col>
                    <Col xs={6} md={4}>
                    </Col>
                    <Col xs={6} md={4}>
                    <Image src={user} roundedCircle />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WelcomeMessage
