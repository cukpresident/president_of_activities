import React, { Component} from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade,Button,Input } from 'reactstrap';
import './home.css';
import PageBody from './../../assetView/Page_body';


class Home_body extends Component {
  render() {
    return (
      // <React.Fragment>
      <div>
      <br/>
      <br/>
      <br/>
        <div className="home_img">
        <h1 className="home_title"> 프로젝트 검색</h1>
        <br/>
        <br/>
        
        <Row>
        <Col col="6" sm="4" md="4">
        
        </Col>
        <Col col="6" sm="4" md="4">
        <Input type="text" placeholder="프로젝트 이름 검색" />
        </Col>
              <Col col="4" sm="3" md="3">
              <Button color="info">검색</Button>
        </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <PageBody/>
      </div>
        </div>
    );
  }
}

export default Home_body;
