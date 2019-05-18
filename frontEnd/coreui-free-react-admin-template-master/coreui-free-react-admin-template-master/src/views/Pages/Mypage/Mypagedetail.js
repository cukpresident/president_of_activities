
import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink,Collapse, Row, Table } from 'reactstrap';
import {
  
  Button,

} from 'reactstrap';
import MyProjectDetail from './MyProjectListDetail';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';

import {
  AppHeader,
} from '@coreui/react';
import { inject, observer } from 'mobx-react';

const DefaultHeader = React.lazy(() => import('./HomeHeader'));



@inject('user')
@observer
class Mypagedetail extends Component {
  constructor(props) {
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleCustom = this.toggleCustom.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: false,
      accordion: [true, false, false],
      custom: [true, false],
      status: 'Closed',
      fadeIn: true,
      timeout: 300,
    };
  }
  onEntering() {
    this.setState({ status: 'Opening...' });
  }

  onEntered() {
    this.setState({ status: 'Opened' });
  }

  onExiting() {
    this.setState({ status: 'Closing...' });
  }

  onExited() {
    this.setState({ status: 'Closed' });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleAccordion(tab) {

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      accordion: state,
    });
  }

  toggleCustom(tab) {

    const prevState = this.state.custom;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      custom: state,
    });
  }

  toggleFade() {
    this.setState({ fadeIn: !this.state.fadeIn });
  }


  render() {
    const {user} = this.props.user;
    return (    
        <div className="animated fadeIn">
            <Row>
            <Col xs="18" lg="12">
              <Card>
                <CardBody>
                <h4>  myPage</h4>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" lg="12">
                  <Card>
                  <CardHeader>
                    <h5>about {this.props.user.username}</h5>
                  </CardHeader>
                  <CardBody>
                    <Row>
            
                      <Col xs="12" lg="2"> 
                      <img src={'assets/img/avatars/8.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </Col>
                      <Col xs="12" lg = "10">
                        
                      <Table responsive>
                        <thead>
                        <tr>
                          <th>Username</th>
                          <th>Date registered</th>
                          <th>Role</th>
                          <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>Samppa Nori</td>
                          <td>2012/01/01</td>
                          <td>Member</td>
                          <td>
                            <Badge color="success">Active</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td>Estavan Lykos</td>
                          <td>2012/02/01</td>
                          <td>Staff</td>
                          <td>
                            <Badge color="danger">Banned</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td>Chetan Mohamed</td>
                          <td>2012/02/01</td>
                          <td>Admin</td>
                          <td>
                            <Badge color="secondary">Inactive</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td>Derick Maximinus</td>
                          <td>2012/03/01</td>
                          <td>Member</td>
                          <td>
                            <Badge color="warning">Pending</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td>Friderik Dávid</td>
                          <td>2012/01/21</td>
                          <td>Staff</td>
                          <td>
                            <Badge color="success">Active</Badge>
                          </td>
                        </tr>
                        </tbody>
                      </Table>
                      </Col>
                    </Row> 
                  </CardBody>
                </Card>
              </Col>

              
              

              <Col xl="12">
              
            <Card>
              <CardHeader>
              <h5>My projects</h5>
                <div className="card-header-actions">
                </div>
              </CardHeader>
              <CardBody>
                <div id="accordion">
                  <Card className="mb-0">
                    <CardHeader id="headingOne">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                        <h5 className="m-0 p-0">대외통령</h5>
                        <Badge color="warning">Doing</Badge>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                      <CardBody>
                        <MyProjectDetail/>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingTwo">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                        <h5 className="m-0 p-0">My project2</h5>
                        <Badge color="secondary">Finished</Badge>

                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                      <CardBody>
                      <MyProjectDetail/>

                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingThree">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                        <h5 className="m-0 p-0">My project3</h5>
                        <Badge color="secondary">Finished</Badge>

                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseThree">
                      <CardBody>
                      <MyProjectDetail/>

                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </CardBody>
            </Card>
          
            
          </Col>


            </Row>
          <span className="avatar-status badge-success"></span>
        </div>
        
              

    );
  }
}

export default Mypagedetail;
