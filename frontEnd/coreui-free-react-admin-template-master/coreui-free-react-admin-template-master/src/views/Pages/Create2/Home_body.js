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
        <head><link rel="stylesheet" href="https://unpkg.com/@coreui/coreui/dist/css/coreui.min.css"></link></head>
        </div>
      <div>
      <form>
      <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="Password"></input>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="Password"></input>
    </div>
  </div>
</form>
      </div>
      </React.Fragment>
    );
  }
}

export default Home_body;
