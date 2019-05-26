import React, { Component } from 'react';
import './pageStyle.css'
import { Badge, Card, CardBody, CardHeader, Table } from 'reactstrap';
import {
  Col,
  FormGroup,
  Input,
} from 'reactstrap';
class tdList_P30 extends Component {
    render() {
      return (
       <div>
         <Card>
              <CardHeader>
                 What to do
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>Topic</th>
                    <th>Information</th>
                    <th>Period</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>대분류</td>
                    <td>테스트</td>
                    <td rowSpan="4">2019.05.09<br/>~<br/>2019.05.14</td>
                    <td rowSpan="4">
                      <Badge color="danger">What do Do</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>중분류</td>
                    <td>상점 테스트</td>
                  </tr>
                  <tr>
                    <td>소분류</td>
                    <td>판매 과정 테스트</td>
                  </tr>
                  <tr>
                    <td>참여자</td>
                    <td>llmoob, hans, dominic</td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                Send Comment!
              </CardHeader>
              <CardBody>
            <FormGroup row>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             placeholder="Content..." />
                    </Col>
                    <form>
                      <br/>
                      <input type="checkbox" id="park333"></input>&nbsp;<label for="park333">park333</label><br/>
                      <input type="checkbox" id="hans"></input>&nbsp; <label for="hans">hans</label><br/>
                      <input type="checkbox" id="simon"></input>&nbsp; <label for="simon">simon</label><br/>
                      <input type="checkbox" id="dominic"></input>&nbsp; <label for="dominic">dominic</label><br/>
                      <input type="checkbox" id="llmoob"></input>&nbsp; <label for="llmoob">llmoob</label><br/>
                    </form>
                  </FormGroup>
                  <input type="submit"></input>
                  </CardBody>
            </Card>
       </div>
      );
    }
}

export default tdList_P30;
