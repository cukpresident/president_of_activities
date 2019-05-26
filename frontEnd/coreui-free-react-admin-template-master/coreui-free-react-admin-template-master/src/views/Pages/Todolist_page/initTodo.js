import React, { Component } from 'react';
import {Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';
import './Todo_style.css'
import './Tabs_style.css'


class init_Todo extends Component {
  //showMag1(){
   // var msg = document.getElementsByClassName("inputMsg1")[0].value; 
   // var text = document.createTextNode(msg);
   // var liElement = document.createElement("li"); 
   // liElement.appendChild(text); 
   // document.getElementById("WilldoList").appendChild(liElement); 
  //}
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
      <ul className="WilldoList">
      </ul><br/>
      <input type="text" id="inputMsg1" value="ss"></input> &nbsp;
      <button type="button">추가</button>
      </React.Fragment>
    );
  }
  Done() {
    return(
      <React.Fragment>
      <ul id="DoneList">
      </ul>
      <input type="text" id="inputMsg2"></input> &nbsp;
      <button type="button">추가</button>
      </React.Fragment>
    );
  }
  Do() {
    return(
      <React.Fragment>
      <ul id="DoList">
      </ul><br/>
      <input type="text" id="inputMsg3"></input> &nbsp;
      <button type="button">추가</button>
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
      
      <div>
        <head>
        <link rel="stylesheet" href="https://unpkg.com/@coreui/coreui/dist/css/coreui.min.css"></link>
        </head>
        
        <div class="Todo_header"><div class="NameBox">park333</div>&nbsp;&nbsp;
        <form>
            <select name="Members">
              <option value="park333" selected>park333</option>
              <option value="hans">hans</option>
              <option value="simon">simon</option>
              <option value="dominic">dominic</option>
              <option value="llmoob">llmoob</option>
            </select>
          </form>
        </div>
        <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="3" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => { this.toggle(0, '1'); }}
                >
                  What to do
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
          <iframe frameBorder="0" scrolling="no" name="Do_List" width="70%" height="710" name="DataList"></iframe>
        </Row>
      </div>
      </div>
    );
  }
}

export default init_Todo;
