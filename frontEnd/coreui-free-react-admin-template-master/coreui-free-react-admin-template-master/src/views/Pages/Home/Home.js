import React, { Component} from 'react';

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
        </div>
    );
  }
}

export default Home;
