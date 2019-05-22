import React, {Component} from 'react';
import {Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';

class Tabs extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
    };
  }

  Will_do() {
    return(
      <React.Fragment>
      <ul>
        <h5><li><input type="checkbox" value="1"></input> &nbsp; WilldoList1</li></h5>
        <h5><li><input type="checkbox" value="2"></input> &nbsp; WilldoList2</li></h5>
        <h5><li><input type="checkbox" value="3"></input> &nbsp; WilldoList3</li></h5>
        <h5><li><input type="checkbox" value="4"></input> &nbsp; WilldoList4</li></h5>
        <h5><li><input type="checkbox" value="5"></input> &nbsp; WilldoList5</li></h5>
        <h5><li><input type="checkbox" value="6"></input> &nbsp; WilldoList6</li></h5>
      </ul>
      </React.Fragment>
    );
  }
  Done() {
    return(
      <React.Fragment>
      <ul>
      <h5><li><input type="checkbox" value="1"></input> &nbsp; doneList1</li></h5>
        <h5><li><input type="checkbox" value="2"></input> &nbsp; doneList2</li></h5>
        <h5><li><input type="checkbox" value="3"></input> &nbsp; doneList3</li></h5>
        <h5><li><input type="checkbox" value="4"></input> &nbsp; doneList4</li></h5>
        <h5><li><input type="checkbox" value="5"></input> &nbsp; doneList5</li></h5>
        <h5><li><input type="checkbox" value="6"></input> &nbsp; doneList6</li></h5>
        <h5><li><input type="checkbox" value="7"></input> &nbsp; doneList7</li></h5>
        <h5><li><input type="checkbox" value="8"></input> &nbsp; doneList8</li></h5>
      </ul>
      </React.Fragment>
    );
  }
  Do() {
    return(
      <React.Fragment>
      <ul>
        <h5><li><input type="checkbox" value="1"></input> &nbsp; TodoList1</li></h5>
        <h5><li><input type="checkbox" value="2"></input> &nbsp; TodoList2</li></h5>
        <h5><li><input type="checkbox" value="3"></input> &nbsp; TodoList3</li></h5>
        <h5><li><input type="checkbox" value="4"></input> &nbsp; TodoList4</li></h5>
        <h5><li><input type="checkbox" value="5"></input> &nbsp; TodoList5</li></h5>
        <h5><li><input type="checkbox" value="6"></input> &nbsp; TodoList6</li></h5>
        <br/><br/><br/><br/><br/>
      </ul>
      </React.Fragment>
    );
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
      activeTab: newArray,
    });
  }

  tabPane() {
    return (
      <>
        <TabPane tabId="1">
          {this.Will_do()}
        </TabPane>
        <TabPane tabId="2">
          {this.Done()}
        </TabPane>
        <TabPane tabId="3">
          {this.Do()}
        </TabPane>
      </>
    );
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="2" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => { this.toggle(0, '1'); }}
                >
                  Will do
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => { this.toggle(0, '2'); }}
                >
                  Done
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '3'}
                  onClick={() => { this.toggle(0, '3'); }}
                >
                  Do
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab[0]}>
              {this.tabPane()}
            </TabContent>
          </Col>
          <br/><br/>&nbsp;&nbsp;
          <iframe frameBorder="1" scrolling="no" name="Do_List" width="80%" height="710" name="DetailList"></iframe>
          {/*
          <Col xs="12" md="6" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[1] === '1'}
                  onClick={() => { this.toggle(1, '1'); }}
                >
                  <i className="icon-calculator"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[1] === '2'}
                  onClick={() => { this.toggle(1, '2'); }}
                >
                  <i className="icon-basket-loaded"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[1] === '3'}
                  onClick={() => { this.toggle(1, '3'); }}
                >
                  <i className="icon-pie-chart"></i>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab[1]}>
              {this.tabPane()}
              </TabContent>
          </Col>
          <Col xs="12" md="6" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[2] === '1'}
                  onClick={() => { this.toggle(2, '1'); }}
                >
                  <i className="icon-calculator"></i> <span className={this.state.activeTab[2] === '1' ? '' : 'd-none'}> Calculator</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[2] === '2'}
                  onClick={() => { this.toggle(2, '2'); }}
                >
                  <i className="icon-basket-loaded"></i> <span
                  className={this.state.activeTab[2] === '2' ? '' : 'd-none'}> Shopping cart</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab[2] === '3' })}
                  onClick={() => { this.toggle(2,'3'); }}
                >
                  <i className="icon-pie-chart"></i> <span className={this.state.activeTab[2] === '3' ? '' : 'd-none'}> Charts</span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab[2]}>
              {this.tabPane()}
            </TabContent>
          </Col>
          <Col xs="12" md="6" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[3] === '1'}
                  onClick={() => { this.toggle(3, '1'); }}
                >
                  <i className="icon-calculator"></i>
                  <span className={this.state.activeTab[3] === '1' ? '' : 'd-none'}> Calc</span>
                  {'\u00A0'}<Badge color="success">New</Badge>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[3] === '2'}
                  onClick={() => { this.toggle(3, '2'); }}
                >
                  <i className="icon-basket-loaded"></i>
                  <span className={this.state.activeTab[3] === '2' ? '' : 'd-none'}> Cart</span>
                  {'\u00A0'}<Badge pill color="danger">29</Badge>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[3] === '3'}
                  onClick={() => { this.toggle(3, '3'); }} >
                    <i className="icon-pie-chart"></i>
                    <span className={this.state.activeTab[3] === '3' ? '' : 'd-none'}> Charts</span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab[3]}>
              {this.tabPane()}
            </TabContent>
          </Col>*/}
        </Row>
      </div>
    );
  }
}

export default Tabs;
