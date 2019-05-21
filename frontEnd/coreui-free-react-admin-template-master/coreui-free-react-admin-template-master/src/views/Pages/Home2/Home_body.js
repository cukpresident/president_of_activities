import React, { Component} from 'react';
import './HomebodyStyle.css'
import Carousels from '../../Base/Carousels'
import Widget04 from '../../Widgets/Widget04'
import {
  AppHeader,
} from '@coreui/react';

{/*const DefaultHeader = React.lazy(() => import('./HomeHeader'));*/}

class Home_body extends Component {
  render() {
    return (
      <React.Fragment>
      <div>
      <div class="Style1">
      <Widget04/><br/><br/>
        <h1>이곳은 여러분들의 멋진 작업장이 될것입니다!</h1>
      </div>
        <div class="Style2">
        이 사이트는 여러분들의 프로젝트 진행의 매니저가 될것입니다.<br/>
        이곳에서 여러분들의 실력을 마음껏 뽐내세요!<br/><br/><br/><br/>
        <Carousels/>
        </div><br/><br/>
        <div class="ImgStyle">
        {/* 아래 사진들은 임의로 넣은것 (다른 홍보용 사진이나 아이콘 넣으면 될듯) */}
          <img id="Info1" src={'../../assets/img/avatars/1.jpg'} width="25%" height="25%" alt="admin@bootstrapmaster.com" />
          <img id="Info2" src={'../../assets/img/avatars/2.jpg'} width="25%" height="25%" alt="admin@bootstrapmaster.com" />
          <img id="Info3" src={'../../assets/img/avatars/3.jpg'} width="25%" height="25%" alt="admin@bootstrapmaster.com" />
          <img id="Info4" src={'../../assets/img/avatars/4.jpg'} width="25%" height="25%" alt="admin@bootstrapmaster.com" />
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home_body;
