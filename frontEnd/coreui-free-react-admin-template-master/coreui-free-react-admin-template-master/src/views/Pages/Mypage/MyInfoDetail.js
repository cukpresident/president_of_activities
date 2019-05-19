import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';


class MyInfoDetail extends Component {
  
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }
  render(){
    return(

      <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
            <FormGroup row>
            <Col md="1"/>
              <Col md="2">
                <Label>My Name</Label>
              </Col>
              <Col xs="12" md="9">
                <p className="form-control-static">Username</p>
              </Col>
            </FormGroup>
            <FormGroup row>
            <Col md="1"/>
              <Col md="2">
                <Label htmlFor="text-input">email</Label>
              </Col>
              <Col xs="12" md="9">
                <Input type="text" id="text-input" name="text-input" placeholder="llmooon@naver.com" />
                
              </Col>
            </FormGroup>

      
            <FormGroup row>
            <Col md="1"/>
              <Col md="2">
                <Label htmlFor="textarea-input">나의 소개</Label>
              </Col>
              <Col xs="12" md="9">
                <Input type="textarea" name="textarea-input" id="textarea-input" rows="4"
                       placeholder="안녕하세오..." />
                       <FormText color="muted">자신을 소개해주세요!</FormText>
              </Col>
            </FormGroup>
                       

            <FormGroup row hidden>
              <Col md="3">
                <Label className="custom-file" htmlFor="custom-file-input">Custom file input</Label>
              </Col>
              <Col xs="12" md="9">
                <Label className="custom-file">
                  <Input className="custom-file" type="file" id="custom-file-input" name="file-input" />
                  <span className="custom-file-control"></span>
                </Label>
              </Col>
            </FormGroup>
          </Form>
    )
    }

}
export default MyInfoDetail;
