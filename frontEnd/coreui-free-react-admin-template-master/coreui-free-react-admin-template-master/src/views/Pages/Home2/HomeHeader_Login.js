import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from './../../../assets/img/brand/logo.svg'
import sygnet from '../../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class HomeHeader_Login extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler/>
        
        {/* //  className="d-md-down-none"/>  */}
        {/* display="lg" /> */}

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link" >프로젝트 둘러보기</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/users" className="nav-link">프로젝트 생성</Link>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
          <Link to="/mypage">
            <button type="button" class="btn btn-ghost-primary">pass333님!  </button>
            </Link>
          </NavItem>
        </Nav>
        

      </React.Fragment>
    );
  }
}

HomeHeader_Login.propTypes = propTypes;
HomeHeader_Login.defaultProps = defaultProps;

export default HomeHeader_Login;
