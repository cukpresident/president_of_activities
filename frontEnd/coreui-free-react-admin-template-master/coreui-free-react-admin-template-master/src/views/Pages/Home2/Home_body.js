import React, { Component} from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import './home.css';
import Carousels from '../../Base/Carousels'
import Widget04 from '../../Widgets/Widget04'

import {
  AppHeader,
} from '@coreui/react';



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
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardBody>
                hello
              </CardBody>
              <CardFooter>Project Name 1</CardFooter>
            </Card>
          </Col>
          
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
              <CardFooter>Project Name 1</CardFooter>
            </Card>
          </Col>

          <Col xs="12" sm="6" md="4">
            <Card>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
              <CardFooter>Card footer</CardFooter>
            </Card>
          </Col>
          

      </Row>
      </div>
        
          
          <div class="ImgStyle">
          {/* 아래 사진들은 임의로 넣은것 (다른 홍보용 사진이나 아이콘 넣으면 될듯) */}
            <img id="Info1" src={'../../assets/img/avatars/1.jpg'} width="25%" height="25%" alt="admin@bootstrapmaster.com" />
            <img id="Info2" src={'../../assets/img/avatars/2.jpg'} width="25%" height="25%" alt="admin@bootstrapmaster.com" />
            <img id="Info3" src={'../../assets/img/avatars/3.jpg'} width="25%" height="25%" alt="admin@bootstrapmaster.com" />
            <img id="Info4" src={'../../assets/img/avatars/4.jpg'} width="25%" height="25%" alt="admin@bootstrapmaster.com" />
          </div>
        </div>
      // </React.Fragment>
    );
  }
}

export default Home_body;
