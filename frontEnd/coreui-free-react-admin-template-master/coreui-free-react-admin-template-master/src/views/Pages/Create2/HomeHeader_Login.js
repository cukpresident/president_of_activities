import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from './../../../assets/img/brand/c.PNG'
import sygnet from '../../../assets/img/brand/c.PNG'

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
          full={{ src: logo, width: 89,  alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link" >뭐할까?</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/users" className="nav-link">없앨까?</Link>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="#" className="nav-link">Settings</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="../login">
          <img src={'../../assets/img/avatars/9.PNG'} width="50px" height="50px" className="img-avatar" alt="admin@bootstrapmaster.com" />
            </NavLink>
          </NavItem>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

HomeHeader_Login.propTypes = propTypes;
HomeHeader_Login.defaultProps = defaultProps;

export default HomeHeader_Login;
