import React, { Component } from 'react';
import { Container, Row, Col } from '../common';
import { Link } from "react-router-dom";
import { Select } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import './bet-list.scss';

// images
import IconImage from '../../assets/images/icon.png';

const { Option } = Select;

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
    },
    {
        id: 7,
        assetsleft: "Asset A",
        assetslefticon: IconImage,
        assetsright: "Asset B",
        assetsrighticon: IconImage,
        betpool: "245,000"
    },
    {
        id: 8,
        assetsleft: "Asset A",
        assetslefticon: IconImage,
        assetsright: "Asset B",
        assetsrighticon: IconImage,
        betpool: "245,000"
    },
    {
        id: 9,
        assetsleft: "Asset A",
        assetslefticon: IconImage,
        assetsright: "Asset B",
        assetsrighticon: IconImage,
        betpool: "245,000"
    },
    {
        id: 10,
        assetsleft: "Asset A",
        assetslefticon: IconImage,
        assetsright: "Asset B",
        assetsrighticon: IconImage,
        betpool: "245,000"
    },
    {
        id: 11,
        assetsleft: "Asset A",
        assetslefticon: IconImage,
        assetsright: "Asset B",
        assetsrighticon: IconImage,
        betpool: "245,000"
    },
    {
        id: 12,
        assetsleft: "Asset A",
        assetslefticon: IconImage,
        assetsright: "Asset B",
        assetsrighticon: IconImage,
        betpool: "245,000"
    },
    {
        id: 13,
        assetsleft: "Asset A",
        assetslefticon: IconImage,
        assetsright: "Asset B",
        assetsrighticon: IconImage,
        betpool: "245,000"
    },
    {
        id: 14,
        assetsleft: "Asset A",
        assetslefticon: IconImage,
        assetsright: "Asset B",
        assetsrighticon: IconImage,
        betpool: "245,000"
    },
    {
        id: 15,
        assetsleft: "Asset A",
        assetslefticon: IconImage,
        assetsright: "Asset B",
        assetsrighticon: IconImage,
        betpool: "245,000"
    },
    {
        id: 16,
        assetsleft: "Asset A",
        assetslefticon: IconImage,
        assetsright: "Asset B",
        assetsrighticon: IconImage,
        betpool: "245,000"
    },
    {
        id: 17,
        assetsleft: "Asset A",
        assetslefticon: IconImage,
        assetsright: "Asset B",
        assetsrighticon: IconImage,
        betpool: "245,000"
    }
]



class BetListView extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                <div className="betlist-wrapper">
                    <Container>
                        <Row className="mb-4 bet-list-upper">
                            <Col lg="10" md="6">
                                <h3>BET LIST</h3>
                            </Col>
                            <Col lg="2" md="6">
                                <Select defaultValue="sort" size="large">
                                    <Option value="sort">Sort</Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Scrollbars className="bets-listscroll">
                                    <div className="bat-lists-wrape home-upper">
                                        {batlistdata.map(item => 
                                        (
                                            <Link to="/bet-details">
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
                                            </Link>
                                        ))
                                        }
                                    </div>
                                </Scrollbars>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}

export default BetListView
