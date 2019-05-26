import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, Col, Row, Button, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from './../../../assets/img/brand/logo.svg'
import sygnet from '../../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class HomeHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        {/* <AppSidebarToggler className="d-lg-none" display="md" mobile /> */}
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
          <NavLink to="/show" className="nav-link" >프로젝트 둘러보기</NavLink>            
          </NavItem>
          <NavItem className="px-3">
            <Link to="/users" className="nav-link">프로젝트 생성</Link>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>

              <Row>
              <Col col="8" sm="6" md="11  ">
              <Link to="/login">
              <Button block outline color="info">Sign in / Sign up</Button>
              </Link>
              </Col>
              <Col col="5" sm="3" md="1" xl className="mb-3 mb-xl-0">
              </Col>
              </Row>
              
              
          {/* <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-list"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-location-pin"></i></NavLink>
          </NavItem> */}
          

        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

HomeHeader.propTypes = propTypes;
HomeHeader.defaultProps = defaultProps;

export default HomeHeader;
