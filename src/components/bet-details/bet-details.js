import React, { Component } from 'react';
import { Container, Row, Col, SvgIcon } from '../common';
import { Button } from 'antd';
import './bet-details.scss';

// images
import IconImage from '../../assets/images/icon.png';

class BetDetailsView extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                <div className="betdetails-wrapper">
                    <Container>
                        <Row>
                            <Col>
                                <div className="betdetails-box">
                                    <div className="betdetails-head">
                                        <h3>BET DETAILS</h3>
                                        <h1>$ 12,000</h1>
                                        <p>Bet Amount</p>
                                    </div>
                                    <div className="betdetails-bottom">
                                        <div className="betdetails-card">
                                            <div className="betdetails-card-inner">
                                                <div className="images">
                                                    <img alt={IconImage} src={IconImage} />
                                                </div>
                                                <p>Asset A</p>
                                                <p>Qty: 345 coins</p>
                                            </div>
                                        </div>
                                        <div className="center-arrow">
                                            <SvgIcon name="arrows" viewbox="0 0 512.001 512.001" />
                                        </div>
                                        <div className="betdetails-card">
                                            <div className="betdetails-card-inner">
                                                <div className="images">
                                                    <img alt={IconImage} src={IconImage} />
                                                </div>
                                                <p>Asset A</p>
                                                <p>Qty: 345 coins</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="betdetails-section">
                                        <p>Deposit 210 Asset B Coins</p>
                                        <Button type="primary" className="px-5">MATCH BET</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}

export default BetDetailsView
