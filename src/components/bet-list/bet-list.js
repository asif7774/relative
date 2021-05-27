import React, { Component } from 'react';
import { Container, Row, Col, SvgIcon } from '../common';
import { Link } from "react-router-dom";
import { SearchOutlined } from '@ant-design/icons';
import { Select, Form, Input, Button } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import './bet-list.scss';

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
    },
    {
        id: 7,
        assetsleft: "Small Case",
        assetslefticon: "edu",
        assetsright: "Ethereum",
        assetsrighticon: "eth",
        betpool: "245,000"
    },
    {
        id: 8,
        assetsleft: "Ethereum",
        assetslefticon: "eth",
        assetsright: "Doge",
        assetsrighticon: "doge",
        betpool: "245,000"
    },
    {
        id: 9,
        assetsleft: "Small Case",
        assetslefticon: "edu",
        assetsright: "Ethereum",
        assetsrighticon: "eth",
        betpool: "245,000"
    },
    {
        id: 10,
        assetsleft: "Small Case",
        assetslefticon: "edu",
        assetsright: "Ethereum",
        assetsrighticon: "eth",
        betpool: "245,000"
    },
    {
        id: 11,
        assetsleft: "Small Case",
        assetslefticon: "edu",
        assetsright: "Ethereum",
        assetsrighticon: "eth",
        betpool: "245,000"
    },
    {
        id: 12,
        assetsleft: "Small Case",
        assetslefticon: "edu",
        assetsright: "Ethereum",
        assetsrighticon: "eth",
        betpool: "245,000"
    },
    {
        id: 13,
        assetsleft: "Small Case",
        assetslefticon: "edu",
        assetsright: "Ethereum",
        assetsrighticon: "eth",
        betpool: "245,000"
    },
    {
        id: 14,
        assetsleft: "Small Case",
        assetslefticon: "edu",
        assetsright: "Ethereum",
        assetsrighticon: "eth",
        betpool: "245,000"
    },
    {
        id: 15,
        assetsleft: "Small Case",
        assetslefticon: "edu",
        assetsright: "Ethereum",
        assetsrighticon: "eth",
        betpool: "245,000"
    }
]



class BetListView extends Component {
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
                <div className="betlist-wrapper">
                    <Container>
                        <Row>
                            <Col lg="3" xl="2" md="4">
                                <Form>
                                    <div className="list-search">
                                        <Form.Item name="selectbet1" className="mb-3">
                                            <Select id="imprintcolor1" className="bet-select ant-select-secondary small" placeholder="Select" dropdownClassName="withdark-bg">
                                                {items.map(item => (
                                                    <Option value={item.id} key={item.id}>
                                                        <i className={"cf cf-" + item.beticon}></i>
                                                        {item.name}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                        <Form.Item name="username" className="mb-3">
                                            <Select id="selectbet2" className="bet-select ant-select-secondary small" placeholder="Select" dropdownClassName="withdark-bg">
                                                {items.map(item => (
                                                    <Option value={item.id} key={item.id}>
                                                        <i className={"cf cf-" + item.beticon}></i>
                                                        {item.name}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                        <Form.Item name="betamount">
                                            <Input className="ant-input-secondary" placeholder="Bet Amount" prefix={"$"} size="small" autoComplete="off" />
                                        </Form.Item>
                                        <Button className="text-capitalize" type="primary" icon={<SearchOutlined />} block size="small">Search</Button>
                                    </div>
                                </Form>
                            </Col>
                            <Col lg="9" xl="10" md="8">
                                <Row className="mb-3 bet-list-upper">
                                    <Col>
                                        <h3>Bet List</h3>
                                    </Col>
                                    <Col className="text-right">
                                        <Select className="sort-select ant-select-secondary small mt-1" dropdownClassName="withwhite-bg" bordered={false} placeholder="Sort By">
                                            <Option value="price">Price</Option>
                                            <Option value="date">Date</Option>
                                        </Select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Scrollbars className="bets-listscroll">
                                            <div className="bat-lists-wrape">
                                                {batlistdata.map(item =>
                                                (
                                                    <Link to="/bet-details" key={item.id}>
                                                        <div className="bat-box">
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
                                                    </Link>
                                                ))
                                                }
                                            </div>
                                        </Scrollbars>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}

export default BetListView
