import React, { Component } from 'react';
import { SvgIcon } from '../common';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Select, Form, Input, Button, DatePicker, TimePicker } from 'antd';
import './create-bet.scss';

const { Option } = Select;

function onChange(date, dateString) {
    console.log(date, dateString);
}

class CreateBetView extends Component {
    state = {
        items: [
            { id: 1, name: "Ethereum", beticon: "eth" },
            { id: 2, name: "XRP", beticon: "xrp" },
            { id: 3, name: "Small Case", beticon: "edu" },
            { id: 4, name: "Add Token" }
        ]
    };
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        const { items } = this.state;
        return (
            <React.Fragment>
                <Form>
                    <div className="createbet-wrapper">
                        <div className="createbet-box">
                            <div className="createbet-inner">
                                <h3>Create a Bet</h3>
                                <Form.Item name="selectbet1" className="mb-3">
                                    <Select dropDownOffset={{ x: -10, y: -20 }}  id="imprintcolor1" className="bet-select ant-select-secondary large" placeholder="Select" dropdownClassName="withdark-bg">
                                        {items.map(item => (
                                            <Option value={item.id} key={item.id}>
                                                {item.name !== "Add Token" && (
                                                    <div className="options-betinner">
                                                        <i className={"cf cf-" + item.beticon}></i>
                                                        {item.name}
                                                    </div>
                                                )}
                                                {item.name === "Add Token" && (
                                                    <div className="text-center">Add Token</div>
                                                )}
                                            </Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                                <Form.Item name="username" className="mb-3">
                                    <Select id="selectbet2" className="bet-select ant-select-secondary large" placeholder="Select" dropdownClassName="withdark-bg">
                                        {items.map(item => (
                                            <Option value={item.id} key={item.id}>
                                                {item.name !== "Add Token" && (
                                                    <div className="options-betinner">
                                                        <i className={"cf cf-" + item.beticon}></i>
                                                        {item.name}
                                                    </div>
                                                )}
                                                {item.name === "Add Token" && (
                                                    <div className="text-center">Add Token</div>
                                                )}
                                            </Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                                <Form.Item name="betamount" className="mb-3">
                                    <Input className="ant-input-secondary" placeholder="Bet Amount" suffix={"$"} size="large" autoComplete="off" />
                                </Form.Item>
                                <Form.Item name="bettime" className="mb-3">
                                    <TimePicker placeholder="Bet Duration" className="ant-picker-secondary" onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                                </Form.Item>
                                <Form.Item name="betdate" className="mb-3">
                                    <DatePicker placeholder="Bet Start Date" className="ant-picker-secondary" onChange={onChange} suffixIcon={<SvgIcon name="calendar" viewbox="0 0 20.625 18.75" />} />
                                </Form.Item>
                                <Link to="/bet-list"><Button className="text-capitalize" type="primary" block size="large">Create Bet</Button></Link>
                            </div>
                        </div>
                    </div>
                </Form>
            </React.Fragment>
        )
    }
}

export default CreateBetView
