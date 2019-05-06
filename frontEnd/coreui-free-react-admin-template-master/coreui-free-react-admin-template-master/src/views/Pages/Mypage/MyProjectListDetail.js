
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

const DefaultHeader = React.lazy(() => import('./HomeHeader'));



class MyProjectListDetail extends Component {
  
  render() {
    return (
      <Row>
                          <Col xs="10" lg="2"> 
                          <img src={'assets/img/project/project1.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                          </Col>
                          {/* <Row> */}
                          <Col xs="10" lg="8"> 

                          <h3> 대외통령 </h3><br/>
                          <h5> 개요 : 프로젝트 플로우 매니저 서비스 </h5>
                          <h6> 프로젝트 기간 : 2019.03.01 ~ 2019.09.10 </h6>
                          <h6> 팀원 : 하정구, 이선민, 김아형, 박두원</h6>

                          </Col>
                          <Col xs="10" lg="2"> 
                          <br/><br/><br/><br/>
                          <Button block color="dark" className="btn-pill">ENTER</Button>
                          </Col>

                        {/* </Row> */}
                        </Row>  
              

    );
  }
}

export default MyProjectListDetail;
