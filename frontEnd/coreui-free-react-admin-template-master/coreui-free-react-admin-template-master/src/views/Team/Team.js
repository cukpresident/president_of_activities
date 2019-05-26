import React, { Component } from 'react';
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Col, Collapse, Fade, Row } from 'reactstrap';
import Graph from './graph';
import App from './App';

class Dashboard extends Component {
  

  render() {

    return (
      <div className="animated fadeIn">
          <Card>
            <CardBody>
            <App/>
            </CardBody>
          </Card>
          <Graph/>

      </div>
    );
  }
}

export default Dashboard;
