import React, { Component } from 'react';

class UserInfo extends Component {
  static defaultProps = {
    info: {
      name: '이름',
      phone: '010-0000-0000',
      id: 0
    }
  }
  
  render() {
    const style = {
      
    };

    const {
      name, phone, id
    } = this.props.info;
    
    return (
      
    );
  }
}

export default UserInfo;