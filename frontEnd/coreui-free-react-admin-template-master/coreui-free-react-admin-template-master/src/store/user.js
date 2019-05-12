import { observable, action } from 'mobx';
import axios from 'axios';
import { useStaticRendering } from 'mobx-react';
// import axios from 'axios';

export default class User {
  @observable username;
  @observable usernum;
  @observable userid;

  @action setUser=(usernum,userid, username) => {
    this.username = username;
    this.userid = userid;
    this.usernum = usernum;
  }

  @action login=(id, pw) => {
      this.setUser(1,"hello","Test");
    // console.log('id');
    // const body = {
    //   username: id,
    //   password: pw,
    // };
    // console.log(body);
    // axios.post('http://localhost:8080/user/login', body)
    //   .then((response) => {
    //     this.setUser(response.data.usernum, response.data.username);
    //     console.log('로그인 성공');
    //   })
    //   .catch(() => {
    //     alert('로그인을 다시 시도하세용.');
    //   });
  };
}