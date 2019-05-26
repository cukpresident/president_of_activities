import React, { Component } from 'react';
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Col, Collapse, Fade, Row } from 'reactstrap';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { ListGroup, ListGroupItem } from 'reactstrap';


class Graph extends Component {
  
  
  render() {
    return (
      <div>
        <Card>
          <CardBody>

          
        <Timeline lineColor={'#ddd'}>
  <TimelineItem
    key="001"
    dateText="계획 2019.02.10~2019.02.17"
    style={{ color: '#e86971' }}
    bodyContainerStyle={{
      background: '#FDEDEC',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3><strong>프로젝트 계획 세우기</strong></h3><br/>
    <h4><strong>목표 설정</strong></h4>
    <p>
      프로젝트 목표 설정 / park333, Simon / 2019.02.10 ~ 1029.02.13
    </p><br/>
    <h4><strong>협업 도구, 개발 도구 정하기</strong></h4>
    <p>
      팀원들 간 사용할 도구, 개발 도구 정하기 / park333, Simon / 2019.02.14 ~ 1029.02.15
    </p><br/>
    <h4><strong>상세 역할 분담 정하기</strong></h4>
    <p>
      상세 역할 분담 정하기 / park333, Simon / 2019.02.16 ~ 1029.02.17
    </p>
  </TimelineItem>
  <TimelineItem
    key="002"
    dateText="구상 2019.02.16~2019.03.02"
    dateInnerStyle={{ background: '#61b8ff'}}
    bodyContainerStyle={{
      background: '#EBF5FB',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
    style={{ color: '#61b8ff' }}
  >
    <h3><strong>게임 스토리 구상</strong></h3><br/>
    <h4><strong>유저 스토리</strong></h4><br/>
    <p>
      판매 배경 구체화 / park333, Simon / 2019.02.16 ~ 2019.02.21
    </p>
    <p>
      판매 전략 구체화 / park333, Simon / 2019.02.16 ~ 2019.02.21
    </p><br/><br/>
    <h3><strong>게임 아이템 구상</strong></h3><br/>
    <h4><strong>붕어빵 종류</strong></h4><br/>
    <p>
      팥 붕어빵 구체화 / park333, Simon / 2019.02.22 ~ 2019.02.24
    </p>
    <p>
      슈크림 붕어빵 구체화 / park333, Simon / 2019.02.22 ~ 2019.02.24
    </p>
    <p>
      믹스 붕어빵 구체화 / park333, Simon / 2019.02.22 ~ 2019.02.24
    </p><br/><br/>
    <h3><strong>게임 캐릭터 구상</strong></h3><br/>
    <h4><strong>유저 캐릭터 구체화</strong></h4><br/>
    <p>
      주인공 스토리 구체화 / park333, Simon / 2019.02.25 ~ 2019.02.26
    </p>
    <p>
      알바(남) 스토리 구체화 / park333, Simon / 2019.02.27 ~ 2019.02.28
    </p>
    <p>
      알바(여) 스토리 구체화 / park333, Simon / 2019.02.27 ~ 2019.02.28
    </p>
    <p>
      손님1 스토리 구체화 / park333, Simon / 2019.03.01 ~ 2019.03.02
    </p>
    <p>
      손님2 스토리 구체화 / park333, Simon / 2019.03.01 ~ 2019.03.02
    </p>
  </TimelineItem>
  <TimelineItem
    key="003"
    dateText="개발 2019.03.03~2019.05.08"
    dateInnerStyle={{ background: '#76bb7f' }}
    bodyContainerStyle={{
      background: '#EAFAF1',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
    style={{ color: '#76bb7f' }}
  >
    <h3><strong>상점 개발</strong></h3><br/>
    <h4><strong>붕어빵 상점 개발</strong></h4><br/>
    <p>
      판매 개발 / Simon, Hans, Dominic / 2019.03.03 ~ 2019.03.10
    </p>
    <p>
      만들기 개발 / Simon, Hans, Dominic / 2019.03.11 ~ 2019.03.18
    </p>
    <p>
      손님 대화 개발 / Simon, Hans, Dominic / 2019.03.19 ~ 2019.03.22
    </p>
  </TimelineItem>
</Timeline>
        
</CardBody>
        </Card>
      </div>
    );
  }
}

export default Graph;
