import React, { Component} from 'react';
import Home_body from './Home_body'
import {
  AppHeader,
} from '@coreui/react';

const DefaultHeader = React.lazy(() => import('./HomeHeader_Login'));

class Create extends Component {
  
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>      
        </AppHeader>
        <div className="app-body" style={{width: '50%', height: '80%', justifyContent: 'center', margin:'auto'}}>
          <main className="main">
            <Home_body/>
          </main>
        </div>
        </div>
    );
  }
}

export default Create;
