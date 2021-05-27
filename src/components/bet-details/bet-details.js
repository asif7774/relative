import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './bet-details.scss';

class BetDetailsView extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                <div className="betdetails-wrapper">
                    <div className="betdetails-box">
                        <h3>Bet Details</h3>
                        <div className="betdetails-boxinner">
                            <div className="betdetails-head">
                                <h1>$ 12,000</h1>
                                <p>Bet Amount</p>
                            </div>
                            <div className="betdetails-bottom">
                                <div className="betdetails-card">
                                    <div className="betdetails-card-inner">
                                        <div className="images">
                                            <i className="cf cf-edu"></i>
                                        </div>
                                        <div className="right">
                                            <p>Small Case</p>
                                            <small>345 Coins</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="betdetails-card">
                                    <div className="betdetails-card-inner">
                                        <div className="images">
                                            <i className="cf cf-eth"></i>
                                        </div>
                                        <div className="right">
                                            <p>Ethereum</p>
                                            <small>210 Coins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="betdetails-action">
                                <p>Deposit 210 Ethereum coins</p>
                                <Link to="/bet-list"><Button type="primary" block>Match Bet</Button></Link>
                            </div>
                       </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BetDetailsView
