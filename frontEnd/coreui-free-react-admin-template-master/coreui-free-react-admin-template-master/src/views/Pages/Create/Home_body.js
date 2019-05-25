import React, { Component, Fragment} from 'react';
import './HomebodyStyle.css'
import Carousels from '../../Base/Carousels'
import Widget04 from '../../Widgets/Widget04'
import {
  AppHeader,
} from '@coreui/react';

{/*const DefaultHeader = React.lazy(() => import('./HomeHeader'));*/}

class Home_body extends Component {
  state = {
    i: 1
  }
  handleClick = () => {
    if(this.state.i==1){
      var x = document.getElementById("one");
      x.style.display="block";
    }
    if(this.state.i==2){
      var x = document.getElementById("two");
      x.style.display="block";
    }
    if(this.state.i==3){
      var x = document.getElementById("three");
      x.style.display="block";
    }
    if(this.state.i==4){
      var x = document.getElementById("four");
      x.style.display="block";
    }
    if(this.state.i==5){
      var x = document.getElementById("five");
      x.style.display="block";
    }
    console.log(this.state.i++)
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
        <input placeholder='팀원명 입력' style={{width:'50%'}}></input>
        <button type='button' onClick={()=>this.handleClick()}>팀원 등록</button>
      </div><br/><br/>
      <div id='one' style={{display:'none', border: '1px solid black', padding: '8px', margin: '8px'}}>
        <div><b>park333 / Park</b></div>
        <div>sklds@naver.com</div>
      </div><br/>
      <div id='two' style={{display:'none', border: '1px solid black', padding: '8px', margin: '8px'}}>
        <div><b>llmoob / Michael</b></div>
        <div>rose@google.com</div>
      </div><br/>
      <div id='three' style={{display:'none', border: '1px solid black', padding: '8px', margin: '8px'}}>
        <div><b>Simon / Simon</b></div>
        <div>simon@google.com</div>
      </div><br/>
      <div id='four' style={{display:'none', border: '1px solid black', padding: '8px', margin: '8px'}}>
        <div><b>Hans / Jungu</b></div>
        <div>hahhan@naver.com</div>
      </div><br/>
      <div id='five' style={{display:'none', border: '1px solid black', padding: '8px', margin: '8px'}}>
        <div><b>Dominic / TaeMin</b></div>
        <div>dominic@daum.net</div>
      </div>
      
      </React.Fragment>
    );
  }
}

export default Home_body;
