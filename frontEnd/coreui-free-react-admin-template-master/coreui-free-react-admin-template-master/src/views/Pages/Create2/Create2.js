import React, { Component} from 'react';
import Home_body from './Home_body'
import {
  AppHeader,
} from '@coreui/react';

const DefaultHeader = React.lazy(() => import('./HomeHeader_Login'));

{/* 로그인 안했을때!! */}
class Create2 extends Component {
  
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>      
        </AppHeader>
        <div className="app-body">
          <main className="main">
            <Home_body/>
            hello2
          </main>
        </div>
        </div>
    );
  }
}

export default Create2;
