import React, { Component} from 'react';
import Home_body from './Home_body';
import {
  AppHeader,
} from '@coreui/react';

const DefaultHeader = React.lazy(() => import('./HomeHeader'));


class Home extends Component {
  
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>      
        </AppHeader>
        <div className="app-body">
          <main className="main">
            <Home_body/>
          </main>
        </div>
        </div>
    );
  }
}


export default Home;
