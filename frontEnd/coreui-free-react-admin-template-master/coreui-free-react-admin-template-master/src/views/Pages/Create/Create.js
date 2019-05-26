import React, { Component} from 'react';
import Home_body from './Home_body'
import {
  AppHeader,
} from '@coreui/react';
import {Card, CardBody} from 'reactstrap';
const DefaultHeader = React.lazy(() => import('./../headers/HomeHeader'));

class Create extends Component {
  
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>      
        </AppHeader>
        <div className="app-body" style={{width: '50%', height: '80%', justifyContent: 'center', marginLeft:'25%'}}>
          <main className="main">
            <br/>
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

export default Create;
