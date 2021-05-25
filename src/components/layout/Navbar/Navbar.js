import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { Menu, Layout, Button } from "antd";
import { NavLink, Link } from "react-router-dom";
import { SvgIcon, Container } from '../../common';
import './Navbar.scss';

// imaport images
import LogoImage from "../../../assets/images/logo.png";

const { Sider } = Layout;

const UpperMenu = ({ onClick }) => {
  return (
    <Menu>
      <Menu.Item key="1">
        <NavLink onClick={onClick} activeClassName="active" to="/home">
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink onClick={onClick} activeClassName="active" to="/about">
          About
        </NavLink>
      </Menu.Item>
    </Menu>
  )
}

class Navbar extends Component {
  state = {
    collapsed: true,
  };
  sidebarToggle = (e) => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
    if (this.state.collapsed) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
  };
  render() {
    let { collapsed } = this.state;
    return (
      <div className="home-header-wrapper">
        <Container>
          <div className="home-header">
            <div className="logo-wrapper">
              <div className="logo">
                <Link to="home">
                  <img alt="Logo" src={LogoImage} />
                </Link>
              </div>
            </div>
            <MediaQuery minDeviceWidth={992}>
              <div className="header-menus">
                <UpperMenu theme={'transparent'} onClick={this.handleClick} mode="horizontal" />
              </div>
            </MediaQuery>
            <div className="header-right">
              <Button type="primary">CONNECT WALLET</Button>
            </div>
            <MediaQuery maxDeviceWidth={991}>
              <div className="siderbar-toggle" onClick={this.sidebarToggle}>
                <SvgIcon name="menu" viewbox="0 0 22 22" />
              </div>
            </MediaQuery>
          </div>
        </Container>
        {/* Sidebar Menu (Mobile) */}
        <MediaQuery maxDeviceWidth={991}>
          <Sider
            trigger={null}
            breakpoint="md"
            collapsedWidth="0"
            className="main-sidebar"
            collapsed={collapsed}
          >
            <div className="sidebar-upper">
              <SvgIcon name="close" className="close" viewbox="0 0 298.667 298.667" onClick={this.sidebarToggle} />
              <UpperMenu mode="inline" onClick={this.sidebarToggle} />
            </div>
          </Sider>

          {/* Siderbar Backgroud click close element */}
          {!collapsed &&
            <div className="sidebar-backdrop" onClick={this.sidebarToggle}></div>
          }
        </MediaQuery>
      </div>
    )
  }
}

export default Navbar
