import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Row,
  Table,
  ListGroup, ListGroupItem
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

// Social Box Chart
const socialBoxData = [
  { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
  { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
  { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
  { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const socialChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var data2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var data3 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var data4 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var data5 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];


for (var i = 0; i <= elements; i++) {
  // data1.push(random(50, 200));
  //data2.push(random(80, 100));
  //data3.push(65);
  //data4.push(random(50, 200));
  //data5.push(random(50, 200));

}

const mainChart = {
  labels: [ '5/7', '5/8', '5/9', '5/10', '5/11', '5/12', '5/13', '5/14', '5/15', '5/16', '5/17', '5/18', '5/19', '5/20', '5/21', '5/22', '5/23', '5/24', '5/25', '5/26'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandPrimary,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      // borderDash: [8, 5],
      data: data3,
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandWarning,
      pointHoverBackgroundColor: '#1ABC9C',
      borderWidth: 2,
      // borderDash: [8, 5],
      data: data4,
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#AF601A',
      borderWidth: 2,
      // borderDash: [8, 5],
      data: data5,
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(100 / 5),
          max: 100,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                
                <div className="text-value">5</div>
                <div>Members</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                
                <div className="text-value">5</div>
                <div>진행중인 일</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData1} options={cardChartOpts1} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                
                <div className="text-value">20</div>
                <div>완료된 일</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData3} options={cardChartOpts3} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                
                <div className="text-value">15</div>
                <div>해야 될 일</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
              </div>
            </Card>
          </Col>
        </Row>
    
        <Row>
      <Col xs="12" sm="12" lg="6">
      <Card>
      <CardHeader>진행중인 TodoList</CardHeader>
      <CardBody>
      <ListGroup>
        <Badge  color="info">개발 / 유저 개발/ 유저 스토리라인 개발</Badge> {' '}
        
        <ListGroupItem>
       <Row>
        <Col xs="12" sm="12" lg="5">
          주인공 개발
        </Col>
        
        <Col xs="12" sm="12" lg="3">
          <Badge color="warning">2019.04.01~
          2019.04.10</Badge>
          </Col>

        <Col xs="12" sm="12" lg="4">
        <Badge color="secondary">simon</Badge> {'  '}
        <Badge color="secondary">hans</Badge> {'  '}
        <Badge color="secondary"> dominic</Badge> {'  '}
        </Col>
       </Row>
       </ListGroupItem>
        
       <ListGroupItem>
       <Row>
        <Col xs="12" sm="12" lg="5">
          손님 1 개발
        </Col>
        
        <Col xs="12" sm="12" lg="3">
          <Badge color="warning">2019.04.01~
          2019.04.10</Badge>
          </Col>

        <Col xs="12" sm="12" lg="4">
        <Badge color="secondary">simon</Badge> {'  '}
        <Badge color="secondary">hans</Badge> {'  '}
        <Badge color="secondary"> dominic</Badge> {'  '}
        </Col>
       </Row>
       </ListGroupItem>

       <ListGroupItem>
       <Row>
        <Col xs="12" sm="12" lg="5">
	        손님 2 개발
        </Col>
        
        <Col xs="12" sm="12" lg="3">
          <Badge color="warning">2019.04.01~
          2019.04.10</Badge>
          </Col>

        <Col xs="12" sm="12" lg="4">
        <Badge color="secondary">simon</Badge> {'  '}
        <Badge color="secondary">hans</Badge> {'  '}
        <Badge color="secondary"> dominic</Badge> {'  '}
        </Col>
       </Row>
       </ListGroupItem>

       <ListGroupItem>
       <Row>
        <Col xs="12" sm="12" lg="5">
	        알바(여) 개발 {' '}
        </Col>
        
        <Col xs="12" sm="12" lg="3">
          <Badge color="warning">2019.04.01~
          2019.04.10</Badge>
          </Col>

        <Col xs="12" sm="12" lg="4">
        <Badge color="secondary">simon</Badge> {'  '}
        <Badge color="secondary">hans</Badge> {'  '}
        <Badge color="secondary"> dominic</Badge> {'  '}
        </Col>
       </Row>
       </ListGroupItem>

       <ListGroupItem>
       <Row>
        <Col xs="12" sm="12" lg="5">
	알바(남) 개발 {' '}
        </Col>
        
        <Col xs="12" sm="12" lg="3">
          <Badge color="warning">2019.04.01~
          2019.04.10</Badge>
          </Col>

        <Col xs="12" sm="12" lg="4">
        <Badge color="secondary">simon</Badge> {'  '}
        <Badge color="secondary">hans</Badge> {'  '}
        <Badge color="secondary"> dominic</Badge> {'  '}
        </Col>
       </Row>
       </ListGroupItem>

      </ListGroup>
      </CardBody>
      </Card>
        </Col>

        <Col xs="12" sm="12" lg="6">
      <Card>
      <CardHeader>최근 완료된 목록</CardHeader>
      <CardBody>
      <ListGroup>
        <Badge  color="info">개발 / 아이템 개발/ 붕어빵 개발</Badge> {' '}
        
        <ListGroupItem>
        <Row>
          <Col xs="12" sm="12" lg="5">
          믹스 붕어빵 아이템 개발 {' '}
          </Col>
          <Col xs="12" sm="12" lg="3">
          <Badge color="warning">2019.04.01~
          2019.04.10</Badge>{' '}
          </Col>
          
          <Col xs="12" sm="12" lg="4">
        <Badge color="secondary">simon</Badge> {'  '}
        <Badge color="secondary">hans</Badge> {'  '}
        <Badge color="secondary"> dominic</Badge> {'  '}
        </Col>

       </Row>
       </ListGroupItem>


       <ListGroupItem>
       <Row>
       <Col xs="12" sm="12" lg="5">
       팥 붕어빵 아이템 개발 {' '}
      </Col>
       <Col xs="12" sm="12" lg="3">
        <Badge color="warning">2019.04.01~
        2019.04.10</Badge>{' '}
        </Col> 
       <Col xs="12" sm="12" lg="4">
       <Badge color="secondary">simon</Badge> {'  '}
       <Badge color="secondary">hans</Badge> {'  '}
       <Badge color="secondary"> dominic</Badge> {'  '}
       </Col>
       </Row>
       </ListGroupItem>

       <ListGroupItem>
       <Row>
        <Col xs="12" sm="12" lg="5">
        슈크림 붕어빵 아이템 개발
        </Col>
        
        <Col xs="12" sm="12" lg="3">
          <Badge color="warning">2019.04.01~
          2019.04.10</Badge>
          </Col>

        <Col xs="12" sm="12" lg="4">
        <Badge color="secondary">simon</Badge> {'  '}
        <Badge color="secondary">hans</Badge> {'  '}
        <Badge color="secondary"> dominic</Badge> {'  '}
        </Col>
       </Row>
       </ListGroupItem>

       <Badge  color="info">개발 / 상점 개발/ 붕어빵 상점 개발</Badge> {' '}
       
       <ListGroupItem>
       <Row>
        <Col xs="12" sm="12" lg="5">
	손님 대화 개발 {' '}
        </Col>
        
        <Col xs="12" sm="12" lg="3">
          <Badge color="warning">2019.04.01~
          2019.04.10</Badge>
          </Col>

        <Col xs="12" sm="12" lg="4">
        <Badge color="secondary">simon</Badge> {'  '}
        <Badge color="secondary">hans</Badge> {'  '}
        <Badge color="secondary"> dominic</Badge> {'  '}
        </Col>
       </Row>
       </ListGroupItem>

       <ListGroupItem>
       <Row>
        <Col xs="12" sm="12" lg="5">
	붕어빵 만들기 개발
        </Col>
        
        <Col xs="12" sm="12" lg="3">
          <Badge color="warning">2019.04.01~
          2019.04.10</Badge>
          </Col>

        <Col xs="12" sm="12" lg="4">
        <Badge color="secondary">simon</Badge> {'  '}
        <Badge color="secondary">hans</Badge> {'  '}
        <Badge color="secondary"> dominic</Badge> {'  '}
        </Col>
       </Row>
       </ListGroupItem>
      <br/>
       <Row>
         <Col sm={{size :5 , offset : 3}}>
           <Pagination>
              <PaginationItem>
                <PaginationLink previous tag="button" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">
                  5
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next tag="button" />
              </PaginationItem>
            </Pagination>
            </Col>
       </Row>
      </ListGroup>
      </CardBody>
      </Card>
        </Col>
      </Row>
        
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">최근 완료된 목록</CardTitle>
                    <div className="small text-muted">November 2015</div>
                  </Col>
                  
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={mainChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
              <CardFooter>
                <Row className="text-center">
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Visits</div>
                    <strong>29.703 Users (40%)</strong>
                    <Progress className="progress-xs mt-2" color="success" value="40" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                    <div className="text-muted">Unique</div>
                    <strong>24.093 Users (20%)</strong>
                    <Progress className="progress-xs mt-2" color="info" value="20" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Pageviews</div>
                    <strong>78.706 Views (60%)</strong>
                    <Progress className="progress-xs mt-2" color="warning" value="60" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">New Users</div>
                    <strong>22.123 Users (80%)</strong>
                    <Progress className="progress-xs mt-2" color="danger" value="80" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                    <div className="text-muted">Bounce Rate</div>
                    <strong>Average Rate (40.15%)</strong>
                    <Progress className="progress-xs mt-2" color="primary" value="40" />
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>

      
</div>
    );
  }
}

export default Dashboard;
