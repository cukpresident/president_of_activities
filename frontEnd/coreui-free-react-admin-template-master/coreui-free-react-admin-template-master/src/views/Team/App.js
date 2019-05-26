import React, { Component } from 'react';
import './App.css';
import ProgressBar from './ProgressBar';

class App extends Component {
  state = {

    greeting : "Hello!",
    contact :[
      {
        name:1,
        hideconnect: 0,
        connect: 1,
        title: "기획",
        percent:100,
        contact :[
          {
            name:2,
            hideconnect: 1,
            connect: 1,
            title: "프로젝트 계획 세우기",
            percent:100,
            contact :[
              {
                name:3,
                hideconnect: 1,
                connect: 1,
                title: "목표 설정",
                percent:100,
                contact:null,
              },
              {
                name:4,
                hideconnect: 1,
                connect: 2,
                title: "협업 도구, 개발 도구 정하기",
                percent:100,
                contact:null,
              },
              {
                name:5,
                hideconnect: 1,
                connect: 3,
                title: "상세 역할 분담 정하기",
                percent:100,
                contact:null,
              },
            ],
          },
        ],
      },
      {
        name:6,
        hideconnect: 0,
        connect: 2,
        title: "구상",
        percent:100,
        contact :[
          {
            name:7,
            hideconnect: 1,
            connect: 1,
            title: "게임 스토리 구상",
            percent:100,
            contact :[
              {
                name:8,
                hideconnect: 1,
                connect: 1,
                title: "유저 스토리",
                percent:100,
                contact:null,
              },
            ],
          },
          {
            name:9,
            hideconnect: 1,
            connect: 2,
            title: "게임 아이템 구상",
            percent:100,
            contact :[
              {
                name:10,
                hideconnect: 1,
                connect: 1,
                title: "붕어빵 종류",
                percent:100,
                contact:null,
              },
            ],
          },
          {
            name:11,
            hideconnect: 1,
            connect: 3,
            title: "게임 캐릭터 구상",
            percent:100,
            contact :[
              {
                name:12,
                hideconnect: 1,
                connect: 1,
                title: "유저 캐릭터 구체화",
                percent:100,
                contact:null,
              },
            ],
          },
        ],
      },
      {
        name:13,
        hideconnect: 0,
        connect: 3,
        title: "개발",
        percent:37.5,
        contact :[
          {
            name:14,
            hideconnect: 1,
            connect: 1,
            title: "상점 개발",
            percent:100,
            contact :[
              {
                name:15,
                hideconnect: 1,
                connect: 1,
                title: "붕어빵 상점 개발",
                percent:100,
                contact:null,
              },
            ],
          },
          {
            name:16,
            hideconnect: 1,
            connect: 2,
            title: "아이템 개발",
            percent:100,
            contact :[
              {
                name:17,
                hideconnect: 1,
                connect: 1,
                title: "붕어빵 개발",
                percent:100,
                contact:null,
              },
            ],
          },
          {
            name:18,
            hideconnect: 1,
            connect: 3,
            title: "유저 개발",
            percent: 0,
            contact :[
              {
                name:19,
                hideconnect: 1,
                connect: 1,
                title: "유저 스토리라인 개발",
                percent:0,
                contact:null,
              },
              {
                name:20,
                hideconnect: 1,
                connect: 2,
                title: "유저 unity 이미지 개발",
                percent:0,
                contact:null,
              },
            ],
          },
        ],
      },
      {
        name:21,
        hideconnect: 0,
        connect: 4,
        title: "테스트",
        percent:0,
        contact :[
          {
            name:22,
            hideconnect: 1,
            connect: 1,
            title: "상점 테스트",
            percent:0,
            contact :[
              {
                name:23,
                hideconnect: 1,
                connect: 1,
                title: "판매 과정 테스트",
                percent:0,
                contact:null,
              },
              {
                name:24,
                hideconnect: 1,
                connect: 2,
                title: "요리 과정 테스트",
                percent:0,
                contact:null,
              },
            ],
          },
          {
            name:25,
            hideconnect: 1,
            connect: 2,
            title: "기본 테스트",
            percent:0,
            contact :[
              {
                name:26,
                hideconnect: 1,
                connect: 1,
                title: "유저 데이터 테스트",
                percent:0,
                contact:null,
              },
            ],
          },
          {
            name:27,
            hideconnect: 1,
            connect: 3,
            title: "전체 테스트",
            percent:0,
            contact :[
              {
                name:28,
                hideconnect: 1,
                connect: 1,
                title: "통합 테스트",
                percent:0,
                contact:null,
              },
            ],
          },
        ],
      },
      {
        name:29,
        hideconnect: 0,
        connect: 5,
        title: "완성",
        percent:0,
        contact :[
          {
            name:30,
            hideconnect: 1,
            connect: 1,
            title: "배포",
            percent: 0,
            contact :[
              {
                name:31,
                hideconnect: 1,
                connect: 1,
                title: "배포",
                percent:0,
                contact:null,
              },
            ],
          },
          {
            name:32,
            hideconnect: 1,
            connect: 2,
            title: "결과 발표 준비",
            percent:0,
            contact :[
              {
                name:33,
                hideconnect: 1,
                connect: 1,
                title: "ppt 준비",
                percent:0,
                contact:null,
              },
              {
                name:34,
                hideconnect: 1,
                connect: 2,
                title: "보고서 작성",
                percent:0,
                contact:null,
              },
            ],
          },
        ],
      },
    ],
  }

  render() {    
    return (
      <div>
          <div>
          {this.state.contact.map((contact, index) => { // Practicing this setState
          return <ProgressBar percentage={contact.percent} title={contact.title} hideconnect={contact.hideconnect}
          connect={contact.connect} contact={contact.contact} name={contact.name} key = {index} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
