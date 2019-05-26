import React, { Component, lazy, Suspense, Fragment } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'


class Dashboard extends Component {



  render() {

    return (
      <div className="animated fadeIn">
      <Fragment>
      <Card>
            <CardBody>
          <div style={{display:'flex',justifyContent:'center'}}>
            
            <h2>User Table</h2>
          </div>
          <div>

          <head>
               <link rel="stylesheet" href="https://unpkg.com/@coreui/coreui/dist/css/coreui.min.css"></link>
          </head>

          <div>  
          <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th className="text-center"><i className="icon-people"></i></th>
                    <th>User Id</th>
                    <th>User Name</th>
                    <th className="text-center">Role</th>
                    <th>Progress</th>
                    <th>Activity</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                      <div><strong>Park333</strong></div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td>
                      <div><strong>Park</strong></div>
                    </td>
                    <td className="text-center">
                      <Badge color="dark">팀장</Badge><br/>
                      <Badge color="primary">계획</Badge><br/>
                      <Badge color="secondary">구상</Badge>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>27%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="success" value="29" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      10 sec ago
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-danger"></span>
                      </div>
                    </td>
                    <td>
                      <div><strong>llmoob</strong></div>
                      <div className="small text-muted">

                        <span>Recurring</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td>
                      <div><strong>Michael</strong></div>
                    </td>
                    <td className="text-center">
                      <Badge color="warning">테스트</Badge><br/>
                      <Badge color="danger">완성</Badge>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>26%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="info" value="26" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      5 minutes ago
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-warning"></span>
                      </div>
                    </td>
                    <td>
                      <div><strong>Simon</strong></div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td>
                      <div><strong>Simon</strong></div>
                    </td>
                    <td className="text-center">
                      <Badge color="primary">계획</Badge><br/>
                      <Badge color="secondary">구상</Badge><br/>
                      <Badge color="success">개발</Badge>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>19%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="warning" value="19" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      1 hour ago
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-secondary"></span>
                      </div>
                    </td>
                    <td>
                      <div><strong>Hans</strong></div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td>
                      <div><strong>Jungu</strong></div>
                    </td>
                    <td className="text-center">
                      <Badge color="success">개발</Badge><br/>
                      <Badge color="warning">테스트</Badge>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>27%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="danger" value="27" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      Last month
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                      <div><strong>Dominic</strong></div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td>
                      <div><strong>TaeMin</strong></div>
                    </td>
                    <td className="text-center">
                      <Badge color="success">개발</Badge><br/>
                      <Badge color="warning">테스트</Badge><br/>
                      <Badge color="danger">완성</Badge>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>19%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="info" value="19" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      Last week
                    </td>
                  </tr>
                
                  </tbody>
                </Table>
                </div>
  </div>
  </CardBody></Card>
  </Fragment>
      </div>
    );
  }
}

export default Dashboard;
