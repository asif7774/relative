import React, { Component } from 'react';
import { Container, Row, Col } from '../common';
import { Link } from 'react-router-dom'
import { Input, AutoComplete, Button } from 'antd';
import './home.scss';

// images
import IconImage from '../../assets/images/icon.png';

const batlistdata = [
    {
        id: 1,
        assetsleft: "Asset A",
        assetslefticon: IconImage,
        assetsright: "Asset B",
        assetsrighticon: IconImage,
        betpool: "245,000"
    },
    {
        id: 2,
        assetsleft: "Asset A",
        assetslefticon: IconImage,
        assetsright: "Asset B",
        assetsrighticon: IconImage,
        betpool: "245,000"
    },
    {
        id: 3,
        assetsleft: "Asset A",
        assetslefticon: IconImage,
        assetsright: "Asset B",
        assetsrighticon: IconImage,
        betpool: "245,000"
    },
    {
        id: 4,
        assetsleft: "Asset A",
        assetslefticon: IconImage,
        assetsright: "Asset B",
        assetsrighticon: IconImage,
        betpool: "245,000"
    },
    {
        id: 5,
        assetsleft: "Asset A",
        assetslefticon: IconImage,
        assetsright: "Asset B",
        assetsrighticon: IconImage,
        betpool: "245,000"
    },
    {
        id: 6,
        assetsleft: "Asset A",
        assetslefticon: IconImage,
        assetsright: "Asset B",
        assetsrighticon: IconImage,
        betpool: "245,000"
    }
]

class HomeView extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                <div className="home-section">
                    <Container>
                        <Row>
                            <Col lg="8">
                                <div className="bat-lists home-upper">
                                    {batlistdata.map(item => 
                                    (
                                    <div className="bat-box" key={item.id}>
                                        <div className="box-upper">
                                            <div className="assets-coloum">
                                                <div className="icons"><img alt={item.assetslefticon} src={item.assetslefticon} /></div>
                                                <p>{item.assetsleft}</p>
                                            </div>
                                            <div className="assets-coloum">
                                                <div className="icons"><img alt={item.assetsrighticon} src={item.assetsrighticon} /></div>
                                                <p>{item.assetsright}</p>
                                            </div>
                                        </div>
                                        <div className="box-bottom">
                                            Bet Pool : $ {item.betpool}
                                        </div>
                                    </div>
                                    ))
                                    }
                                </div>
                                <Row className="align-items-center home-left-bttom">
                                    <Col sm="4">
                                        <h4>SEARCH FOR BETS</h4>
                                    </Col>
                                    <Col sm="8">
                                        <Row>
                                            <Col sm="6" className="mb-4">
                                                <AutoComplete className="aut-search large"
                                                    options={[{ value: 'Asset A' }, { value: 'Asset A1' }]}
                                                >
                                                    <Input.Search size="large" placeholder="ASSET A" />
                                                </AutoComplete>
                                            </Col>
                                            <Col sm="6" className="mb-4"><Input className="ant-input-secondary bet-amount" size="large" placeholder="BET AMOUNT" /></Col>
                                        </Row>
                                        <Row>
                                            <Col sm="6" className="mb-4">
                                                <AutoComplete className="aut-search large"
                                                    options={[{ value: 'Asset B' }, { value: 'Asset B1' }]}
                                                >
                                                    <Input.Search size="large" placeholder="ASSET B" />
                                                </AutoComplete>
                                            </Col>
                                            <Col sm="6" className="mb-4"><Link to="/bet-list"><Button type="primary" size="large" block>SEARCH</Button></Link></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="4">
                                <div className="home-right">
                                    <div></div>
                                    <div className="create-bet-btn"><Link to="/create-bet"><Button type="primary" size="large" block>CREATE BET</Button></Link></div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}

export default HomeView
