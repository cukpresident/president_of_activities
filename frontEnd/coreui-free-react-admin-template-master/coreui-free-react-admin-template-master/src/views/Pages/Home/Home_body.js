import React, { Component} from 'react';
import { Badge, Card, Button, CardFooter, CardHeader, CardImg,Col, Row, Collapse, Fade } from 'reactstrap';
import './home.css';
import PageBody from './../../assetView/Page_body';

class Home_body extends Component {
  


  render() {
    return (
      // <React.Fragment>
      <div>
      <Row>
        <Col xs="12" sm="12">
          <img id="Info1" src={'../../assets/img/project/main.PNG'} width="100%" height="90%" alt="img" />
          </Col>
        
        </Row>
        <div className="home_img">
        <h1 className="home_title">  예시 프로젝트 보기</h1>
        <br/>
        <PageBody/>
      </div>
        </div>
    );
  }
}

export default Home_body;
