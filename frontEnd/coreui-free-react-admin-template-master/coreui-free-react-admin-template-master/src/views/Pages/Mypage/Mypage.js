
import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import Mypagedetail from './Mypagedetail';
import {
  
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  CardFooter,

  CardTitle,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';

import {
  AppHeader,
} from '@coreui/react';

const DefaultHeader = React.lazy(() => import('./../headers/HomeHeader'));



class Mypage extends Component {
  
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>        
        </AppHeader>
        <div className="app-body">

        <main className="main">

          <Mypagedetail/>
        </main>
        </div>
        </div>
        
              

    );
  }
}

export default Mypage;
