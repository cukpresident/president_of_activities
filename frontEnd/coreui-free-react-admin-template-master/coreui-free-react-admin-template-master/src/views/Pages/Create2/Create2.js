import React, { Component} from 'react';
import Home_body from './Home_body'
import {
  AppHeader,
} from '@coreui/react';
import {Card, CardBody} from 'reactstrap';
const DefaultHeader = React.lazy(() => import('./HomeHeader_Login'));

{/* 로그인 안했을때!! */}
class Create2 extends Component {
  
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>      
        </AppHeader>
        <div className="app-body" style={{width: '50%', height: '80%', justifyContent: 'center', marginLeft:'25%'}}>
          <main className="main">
          <Card>
              <CardBody>
                <Home_body/>
             </CardBody>
            </Card>
          </main>
        </div>
        </div>
    );
  }
}

export default Create2;
