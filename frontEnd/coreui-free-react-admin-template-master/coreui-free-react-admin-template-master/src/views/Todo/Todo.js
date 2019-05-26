import React, { Component } from 'react';
import './Todo_style.css'
import Tabs from '../Base/Tabs'

class Todo extends Component {
    render() {

    return (
      <div>
        <head>
        <link rel="stylesheet" href="https://unpkg.com/@coreui/coreui/dist/css/coreui.min.css"></link>
        </head>

        <div class="Todo_header"><div class="NameBox">park333</div>&nbsp;&nbsp;
        <form>
            <select name="Members">
              <option value="park333" selected>park333</option>
              <option value="hans">hans</option>
              <option value="simon">simon</option>
              <option value="dominic">dominic</option>
              <option value="llmoob">llmoob</option>
            </select>
          </form>
        </div>
        <Tabs/>
      </div>
    );
  }
}

export default Todo;
