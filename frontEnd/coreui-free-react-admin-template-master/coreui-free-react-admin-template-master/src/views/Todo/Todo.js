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

        <div class="Todo_header"><div class="NameBox">김아형</div>&nbsp;&nbsp;
        <form>
            <select name="Members">
              <option value="김아형" selected>김아형</option>
              <option value="이선민">이선민</option>
              <option value="박두원">박두원</option>
              <option value="하정구">하정구</option>
            </select>
          </form>
        </div>
        <Tabs/>
      </div>
    );
  }
}

export default Todo;
