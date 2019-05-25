import React, { Component } from 'react';
import UserInfo from './UserInfo';

class UserInfoList extends Component {
  static defaultProps = {
    data: []
  }

  render() {
    const { data } = this.props;
    const list = data.map(
      info => (<UserInfo key={info.id} info={info}/>)
      );

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default UserInfoList;