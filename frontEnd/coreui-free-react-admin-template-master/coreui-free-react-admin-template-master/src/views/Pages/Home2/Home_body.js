import React, { Component} from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import './home.css';

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
        <Row>
          <Col xs="12" sm="5" md="3">
            <Card>
              <CardBody>
              <img id="Info4" src={'../../assets/img/avatars/4.jpg'} width="100%" height="100%" alt="admin@bootstrapmaster.com" />                
              </CardBody>
              <CardFooter>Project Name 1</CardFooter>
            </Card>
          </Col>
          
          <Col xs="12" sm="5" md="3">
            <Card>
              <CardBody>
              <img id="Info4" src={'../../assets/img/avatars/4.jpg'} width="100%" height="100%" alt="admin@bootstrapmaster.com" />
              </CardBody>
              <CardFooter>Project Name 1</CardFooter>
            </Card>
          </Col>

          <Col xs="12" sm="5" md="3">
            <Card>
              <CardBody>
              <img id="Info4" src={'../../assets/img/avatars/4.jpg'} width="100%" height="100%" alt="admin@bootstrapmaster.com" />
              </CardBody>
              <CardFooter>Card footer</CardFooter>
            </Card>
          </Col>
          
          <Col xs="12" sm="5" md="3">
            <Card>
              <CardBody>
              <img id="Info4" src={'../../assets/img/avatars/4.jpg'} width="100%" height="100%" alt="admin@bootstrapmaster.com" />
              </CardBody>
              <CardFooter>Card footer</CardFooter>
            </Card>
          </Col>

      </Row>
      </div>
        </div>
    );
  }
}

export default Home_body;
