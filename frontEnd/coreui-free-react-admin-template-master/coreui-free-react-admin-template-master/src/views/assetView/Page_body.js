import React, { Component} from 'react';
import { Badge, Card, Button, CardFooter, CardHeader, CardImg,Col, Row, Collapse, Fade } from 'reactstrap';
import './home.css';
import {Link} from 'react-router-dom';


class Page_body extends Component {
  


  render() {
    return (
      // <React.Fragment>
      <div>
      
        <Row>
          <Col xs="12" sm="5" md="4">
            <Card>
            <CardImg id="img1" top width="100%" src={'../../assets/img/project/pr1.PNG'} 
            alt="Card image cap" />
          
              <CardFooter><Link to="/dashboard"><Button block color="ghost-dark"> Enter this project!</Button></Link></CardFooter>
            </Card>
          </Col>
          
          {/* <Col xs="12" sm="5" md="3">
            <Card>
              <CardBody>
              <img id="Info4" src={'../../assets/img/avatars/4.jpg'} width="100%" height="100%" alt="admin@bootstrapmaster.com" />
              </CardBody>
              <CardFooter>Project Name 1</CardFooter>
            </Card>
          </Col> */}

          <Col xs="12" sm="5" md="4">
            <Card>
            
            <CardImg id="img1" top width="100%" src={'../../assets/img/project/pr2.PNG'} 
            alt="Card image cap" />
            {/* onMouseEnter= {()=>this.src = '../../assets/img/project/main.PNG'}/> */}
            {/* onMouseEnter= {(event)=>this.img1enter(this)} /> */}
              {/* <CardBody>
              <img id="Info4" src={'../../assets/img/project/pr1.jpg'} width="100%" alt="admin@bootstrapmaster.com" />                
              </CardBody> */}
            
              <CardFooter><Button block color="ghost-dark"> Enter this project!</Button></CardFooter>
              
            </Card>
          </Col>
          
          <Col xs="12" sm="5" md="4">
            <Card>
            <CardImg id="img1" top width="100%" src={'../../assets/img/project/pr3.PNG'} 
            alt="Card image cap" />
            
              {/* <CardBody>
              <img id="Info4" src={'../../assets/img/project/pr1.jpg'} width="100%" alt="admin@bootstrapmaster.com" />                
              </CardBody> */}
              <CardFooter><Button block color="ghost-dark"> Enter this project!</Button></CardFooter>
              
            </Card>
          </Col>
      </Row>
      
      </div>
        
    );
  }
}

export default Page_body;
