import React, { Component} from 'react';
import './HomebodyStyle.css'
import Carousels from '../../Base/Carousels'
import Widget04 from '../../Widgets/Widget04'
import {
  AppHeader,
} from '@coreui/react';
import {Link} from 'react-router-dom';
import {FormGroup, Label, Input} from 'reactstrap';
{/*const DefaultHeader = React.lazy(() => import('./HomeHeader'));*/}

class Home_body extends Component {
  render() {
    return (
      <React.Fragment>
        
        <div>
        <head><link rel="stylesheet" href="https://unpkg.com/@coreui/coreui/dist/css/coreui.min.css"></link></head>
        </div>
        <h1 style={{justifyContent: 'center', marginLeft:'30%'}}><strong>프로젝트 정보 입력</strong></h1><br/>
      <div>
      <FormGroup>
          <Label for="exampleText"><strong>프로젝트 이름</strong></Label>
          <Input type="textarea" name="text" id="exampleText" placeholder="프로젝트명을 입력하세요." />
        </FormGroup><br/>
        <FormGroup>
          <Label for="exampleDate"><strong>프로젝트 기간</strong></Label>
          <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
          />
        </FormGroup><br/><br/>
        <FormGroup>
          <Label for="exampleText"><strong>프로젝트 목표</strong></Label>
          <Input type="textarea" name="text" id="exampleText" placeholder="프로젝트 목표을 입력하세요." />
        </FormGroup><br/>
        <FormGroup>
          <Label for="exampleText"><strong>프로젝트 개요</strong></Label>
          <Input type="textarea" name="text" id="exampleText" placeholder="프로젝트 개요를 입력하세요."/>
        </FormGroup><br/>
      <Link to = "/dashboard">
        <button type="button" class="btn btn-primary" style={{marginLeft:'84%'}} onClick={()=>{alert('프로젝트를 성공적으로 생성하였습니다!');}}>프로젝트 등록</button>
        </Link>
      
      </div>
      </React.Fragment>
    );
  }
}

export default Home_body;
