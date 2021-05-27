import React, { Component } from 'react';
import { Container, Row, Col, SvgIcon } from '../common';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { Form, Button, Select, Input } from 'antd';
import './home.scss';

const { Option } = Select;

const batlistdata = [
    {
        id: 1,
        assetsleft: "Small Case",
        assetslefticon: "edu",
        assetsright: "Ethereum",
        assetsrighticon: "eth",
        betpool: "245,000"
    },
    {
        id: 2,
        assetsleft: "Ethereum",
        assetslefticon: "eth",
        assetsright: "Doge",
        assetsrighticon: "doge",
        betpool: "245,000"
    },
    {
        id: 3,
        assetsleft: "Small Case",
        assetslefticon: "edu",
        assetsright: "Ethereum",
        assetsrighticon: "eth",
        betpool: "245,000"
    },
    {
        id: 4,
        assetsleft: "Small Case",
        assetslefticon: "edu",
        assetsright: "Ethereum",
        assetsrighticon: "eth",
        betpool: "245,000"
    },
    {
        id: 5,
        assetsleft: "Small Case",
        assetslefticon: "edu",
        assetsright: "Ethereum",
        assetsrighticon: "eth",
        betpool: "245,000"
    },
    {
        id: 6,
        assetsleft: "Small Case",
        assetslefticon: "edu",
        assetsright: "Ethereum",
        assetsrighticon: "eth",
        betpool: "245,000"
    }
]

class HomeView extends Component {
    state = {
        items: [
            { id: 1, name: "Ethereum", beticon: "eth" },
            { id: 2, name: "XRP", beticon: "xrp" },
            { id: 3, name: "Small Case", beticon: "edu" }
        ]
    };
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        const { items } = this.state;
        return (
            <React.Fragment>
                <div className="home-section">
                    <div className="home-upper">
                        <Container>
                            <Row>
                                <Col lg="8" className="home-left">
                                    <div className="bat-lists">
                                        {batlistdata.map(item =>
                                        (
                                            <div className="bat-box" key={item.id}>
                                                <SvgIcon className="relatives-icon" name="relative-icon" viewbox="0 0 31.972 24.973" />
                                                <div className="box-upper">
                                                    <div className="assets-coloum">
                                                        <div className="icons"><i className={"cf cf-" + item.assetslefticon}></i></div>
                                                        <p>{item.assetsleft}</p>
                                                    </div>
                                                    <div className="assets-coloum">
                                                        <div className="icons"><i className={"cf cf-" + item.assetsrighticon}></i></div>
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
                                </Col>
                                <Col lg="4" className="home-right">
                                    <SvgIcon className="back-icon" name="relative-icon" viewbox="0 0 31.972 24.973" />
                                    <div className="right-inner">
                                        <h1>Bet with your <br /> favourite crypto</h1>
                                        <p>One-click sign up and a simple funding process mean you can start betting in just five minutes. Choose from BTC, BCH, ETH, LINK, PAX, PAXG, USDT, USDC or DAI.</p>
                                        <p>Even more multi-currency options available - now accepting Dogecoin betting.</p>
                                        <div className="create-bet-btn"><Link to="/create-bet"><Button type="primary">CREATE BET</Button></Link></div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="home-search-bet">
                        <Container>
                            <Row>
                                <Col><h2>Search for bets</h2></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form layout="inline">
                                        <div className="searchbet-wrape">
                                            <div className="bet1">
                                                <Form.Item name="selectbet1">
                                                    <Select id="imprintcolor1" className="bet-select" placeholder="Select" dropdownClassName="withwhite-bg" size="large">
                                                        {items.map(item => (
                                                            <Option value={item.id} key={item.id}>
                                                                <i className={"cf cf-" + item.beticon}></i>
                                                                {item.name}
                                                            </Option>
                                                        ))}
                                                    </Select>
                                                </Form.Item>
                                            </div>
                                            <div className="bet-icon">
                                                <SvgIcon name="relative-icon" viewbox="0 0 31.972 24.973" />
                                            </div>
                                            <div className="bet2">
                                                <Form.Item name="username">
                                                    <Select id="selectbet2" className="bet-select" placeholder="Select" dropdownClassName="withwhite-bg" size="large">
                                                        {items.map(item => (
                                                            <Option value={item.id} key={item.id}>
                                                                <i className={"cf cf-" + item.beticon}></i>
                                                                {item.name}
                                                            </Option>
                                                        ))}
                                                    </Select>
                                                </Form.Item>
                                            </div>
                                            <div className="bet1-amount">
                                                <Form.Item name="betamount">
                                                    <Input placeholder="Bet Amount" suffix={"$"} />
                                                </Form.Item>
                                            </div>
                                            <Link to="/bet-list"><Button type="secondary" icon={<SearchOutlined />}>Search</Button></Link>
                                        </div>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default HomeView
