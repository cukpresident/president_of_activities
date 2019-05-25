import React, {Component} from 'react';
import {Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';
import './Tabs_style.css';

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
      <h5><a href="/#/tdpage30" target="DataList"><li><input type="checkbox" value="4" ></input> &nbsp; 물품 판매 테스트</li></a></h5>
        <h5><a href="/#/tdpage31" target="DataList"><li><input type="checkbox" value="5" ></input> &nbsp; 물품 만들기 테스트</li></a></h5>
        <h5><a href="/#/tdpage32" target="DataList"><li><input type="checkbox" value="6" ></input> &nbsp; 로그인 테스트</li></a></h5>
        <h5><a href="/#/tdpage33" target="DataList"><li><input type="checkbox" value="7" ></input> &nbsp; 로그아웃 테스트</li></a></h5>
        <h5><a href="/#/tdpage34" target="DataList"><li><input type="checkbox" value="8"></input> &nbsp; 정보 불러오기 테스트</li></a></h5>
        <h5><a href="/#/tdpage35" target="DataList"><li><input type="checkbox" value="9" ></input> &nbsp; 마이페이지 테스트</li></a></h5>
        <h5><a href="/#/tdpage36" target="DataList"><li><input type="checkbox" value="10" ></input> &nbsp; 전체 테스트</li></a></h5>
        <h5><a href="/#/tdpage37" target="DataList"><li><input type="checkbox" value="11" ></input> &nbsp; 앱스토어 구축</li></a></h5>
        <h5><a href="/#/tdpage38" target="DataList"><li><input type="checkbox" value="12" ></input> &nbsp; 결과 발표ppt 완성</li></a></h5>
        <h5><a href="/#/tdpage39" target="DataList"><li><input type="checkbox" value="13" ></input> &nbsp; 결과 발표 보고서 작성</li></a></h5>
      </ul>
      </React.Fragment>
    );
  }
  Done() {
    return(
      <React.Fragment>
      <ul>
      <h5><a href="/#/tdpage1" target="DataList"><li><input type="checkbox" value="1" checked></input> &nbsp; 프로젝트 목표 설정</li></a></h5>
        <h5><a href="/#/tdpage2" target="DataList"><li><input type="checkbox" value="2" checked></input> &nbsp; 팀원 간 개발 도구 결정</li></a></h5>
        <h5><a href="/#/tdpage3" target="DataList"><li><input type="checkbox" value="3" checked></input> &nbsp; 상세 역할 분담 정하기</li></a></h5>
        <h5><a href="/#/tdpage4" target="DataList"><li><input type="checkbox" value="4" checked></input> &nbsp; 판매 배경 구체화</li></a></h5>
        <h5><a href="/#/tdpage5" target="DataList"><li><input type="checkbox" value="5" checked></input> &nbsp; 판매 전략 구체화</li></a></h5>
        <h5><a href="/#/tdpage6" target="DataList"><li><input type="checkbox" value="6" checked></input> &nbsp; 팥 붕어빵 구체화</li></a></h5>
        <h5><a href="/#/tdpage7" target="DataList"><li><input type="checkbox" value="7" checked></input> &nbsp; 슈크림 붕어빵 구체화</li></a></h5>
        <h5><a href="/#/tdpage8" target="DataList"><li><input type="checkbox" value="8" checked></input> &nbsp; 믹스 붕어빵 구체화</li></a></h5>
        <h5><a href="/#/tdpage9" target="DataList"><li><input type="checkbox" value="9" checked></input> &nbsp; 주인공 스토리 구체화</li></a></h5>
        <h5><a href="/#/tdpage10" target="DataList"><li><input type="checkbox" value="10" checked></input> &nbsp; 알바(남) 스토리 구체화</li></a></h5>
        <h5><a href="/#/tdpage11" target="DataList"><li><input type="checkbox" value="11" checked></input> &nbsp; 알바(여) 스토리 구체화</li></a></h5>
        <h5><a href="/#/tdpage12" target="DataList"><li><input type="checkbox" value="12" checked></input> &nbsp; 손님 1 스토리 구체화</li></a></h5>
        <h5><a href="/#/tdpage13" target="DataList"><li><input type="checkbox" value="13" checked></input> &nbsp; 손님 2 스토리 구체화</li></a></h5>
        <h5><a href="/#/tdpage14" target="DataList"><li><input type="checkbox" value="14" checked></input> &nbsp; 판매 개발</li></a></h5>
        <h5><a href="/#/tdpage15" target="DataList"><li><input type="checkbox" value="15" checked></input> &nbsp; 만들기 개발</li></a></h5>
        <h5><a href="/#/tdpage16" target="DataList"><li><input type="checkbox" value="16" checked></input> &nbsp; 손님 대화 개발</li></a></h5>
      </ul>
      </React.Fragment>
    );
  }
  Do() {
    return(
      <React.Fragment>
      <ul>
        <h5><a href="/#/tdpage17" target="DataList"><li><input type="checkbox" value="1" ></input> &nbsp; 슈크림 붕어빵 아이템 개발</li></a></h5>
        <h5><a href="/#/tdpage18" target="DataList"><li><input type="checkbox" value="1" ></input> &nbsp; 팥 붕어빵 아이템 개발</li></a></h5>
        <h5><a href="/#/tdpage19" target="DataList"><li><input type="checkbox" value="3" ></input> &nbsp; 믹스 붕어빵 아이템 개발</li></a></h5>
        <h5><a href="/#/tdpage20" target="DataList"><li><input type="checkbox" value="4" ></input> &nbsp; 주인공 개발</li></a></h5>
        <h5><a href="/#/tdpage21" target="DataList"><li><input type="checkbox" value="5" ></input> &nbsp; 손님1 개발</li></a></h5>
        <h5><a href="/#/tdpage22" target="DataList"><li><input type="checkbox" value="6" ></input> &nbsp; 손님2 개발</li></a></h5>
        <h5><a href="/#/tdpage23" target="DataList"><li><input type="checkbox" value="7" ></input> &nbsp; 알바(남) 개발</li></a></h5>
        <h5><a href="/#/tdpage24" target="DataList"><li><input type="checkbox" value="8"></input> &nbsp; 알바(여) 개발</li></a></h5>
        <h5><a href="/#/tdpage25" target="DataList"><li><input type="checkbox" value="9" ></input> &nbsp; 주인공 개발</li></a></h5>
        <h5><a href="/#/tdpage26" target="DataList"><li><input type="checkbox" value="10" ></input> &nbsp; 손님1 개발</li></a></h5>
        <h5><a href="/#/tdpage27" target="DataList"><li><input type="checkbox" value="11" ></input> &nbsp; 손님2 개발</li></a></h5>
        <h5><a href="/#/tdpage28" target="DataList"><li><input type="checkbox" value="12" ></input> &nbsp; 알바(남) 개발</li></a></h5>
        <h5><a href="/#/tdpage29" target="DataList"><li><input type="checkbox" value="13" ></input> &nbsp; 알바(여) 개발</li></a></h5>
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
