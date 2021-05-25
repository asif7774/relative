import React, { Component } from 'react';
import { Container, Row, Col } from '../common';
import { Select, Form, Input, Button } from 'antd';
import './create-bet.scss';

// images

const { Option } = Select;

class CreateBetView extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                <Form>
                    <div className="createbet-wrapper">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="createbet-box">
                                        <h3>CREATE A BET</h3>
                                        <Row className="mt-4">
                                            <Col sm="6" className="mb-2">
                                                <Select defaultValue="t1" className="large ant-select-secondary">
                                                    <Option value="t1">Token A</Option>
                                                    <Option value="t2">Token B</Option>
                                                    <Option value="t3">Token C</Option>
                                                    <Option value="t4">Token D</Option>
                                                </Select>
                                            </Col>
                                            <Col sm="6" className="mb-2">
                                                <Select defaultValue="t1" className="large ant-select-secondary">
                                                    <Option value="t1">Token A</Option>
                                                    <Option value="t2">Token B</Option>
                                                    <Option value="t3">Token C</Option>
                                                    <Option value="t4">Token D</Option>
                                                </Select>
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center">
                                            <Col sm="7" className="createbet-form">
                                                <Row className="createbet-form-row">
                                                    <Col sm="4" className="left-label"><label>Bet Amount</label></Col>
                                                    <Col sm="8"><Input size="large" className="ant-input-secondary" placeholder="$" /></Col>
                                                </Row>
                                                <Row className="createbet-form-row">
                                                    <Col sm="4" className="left-label"><label>Bet Duration</label></Col>
                                                    <Col sm="8"><Input size="large" className="ant-input-secondary" placeholder="" /></Col>
                                                </Row>
                                                <Row className="createbet-form-row">
                                                    <Col sm="4" className="left-label"><label>Bet Start Date</label></Col>
                                                    <Col sm="8"><Input size="large" className="ant-input-secondary" placeholder="" /></Col>
                                                </Row>
                                            </Col>
                                            <Col sm="1"></Col>
                                            <Col sm="4">
                                                <Button type="primary" size="large" block>CREATE BET</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Form>
            </React.Fragment>
        )
    }
}

export default CreateBetView
