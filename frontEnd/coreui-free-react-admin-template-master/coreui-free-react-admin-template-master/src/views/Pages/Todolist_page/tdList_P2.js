import React, { Component } from 'react';
import './pageStyle.css'
import { Badge, Card, CardBody, CardHeader, Table } from 'reactstrap';
import {
  Col,
  FormGroup,
  Input,
} from 'reactstrap';
{/*Done -> 팀원들간 사용할 도구*/}
class tdList_P2 extends Component {
    render() {
      return (
       <div>
         <Card>
              <CardHeader>
                 Done
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
                    <td>계획</td>
                    <td rowSpan="4">2019.02.14<br/>~<br/>2019.02.15</td>
                    <td rowSpan="4">
                      <Badge color="success">Done</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>중분류</td>
                    <td>프로젝트 계획 세우기</td>
                  </tr>
                  <tr>
                    <td>소분류</td>
                    <td>협업 도구, 개발 도구 정하기</td>
                  </tr>
                  <tr>
                    <td>참여자</td>
                    <td>park333, simon</td>
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

export default tdList_P2;
