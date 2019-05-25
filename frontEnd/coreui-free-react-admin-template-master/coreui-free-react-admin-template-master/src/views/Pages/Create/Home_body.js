import React, { Component, Fragment} from 'react';
import './HomebodyStyle.css'
import Carousels from '../../Base/Carousels'
import Widget04 from '../../Widgets/Widget04'
import {
  AppHeader,
} from '@coreui/react';
import UserInfo from './UserInfo';
import UserInfoList from './UserInfoList';
import UserForm from './UserForm';

{/*const DefaultHeader = React.lazy(() => import('./HomeHeader'));*/}

class Home_body extends Component {
  id = 0
  state = {
    i:0,
    information: [
      {
        id: 0,
        name: 'park333 / Park',
        phone: 'sklds@naver.com'
      },
      {
        id: 1,
        name: 'llmoob / Michael',
        phone: 'rose@google.com'
      },
      {
        id: 2,
        name: 'Simon / Simon',
        phone: 'simon@google.com'
      },
      {
        id: 3,
        name: 'Hans / Jungu',
        phone: 'hahhan@naver.com'
      },
      {
        id: 4,
        name: 'Dominic / TaeMin',
        phone: 'dominic@daum.net'
      }
    ]
  }
  handleClick = () => {
    console.log(this.state.information[this.state.i++].id)
    console.log('asd')
  }
  render() {
    return (
      <React.Fragment>
      <div>
        <head>
          <link rel="stylesheet" href="https://unpkg.com/@coreui/coreui/dist/css/coreui.min.css"></link>
        </head>
      </div>
      <div>
        <form>
          <input type="password" placeholder="팀원명 입력"></input>
        </form>
      </div>
      <div>
        <UserForm
          onCreate={this.handleCreate}
        />
        <UserInfoList data={this.state.information[this.state.i++]}/>
        <input placeholder='팀원명 입력'></input>
        <button type='button' onClick={()=>this.handleClick()}>LLL</button>
      </div>
      
      </React.Fragment>
    );
  }
}

export default Home_body;