import React, { Component } from 'react';
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Col, Collapse, Fade, Row } from 'reactstrap';
import Graph from './graph';

class Dashboard extends Component {
  

  render() {

    return (
      <div className="animated fadeIn">
          <Graph/>

      </div>
    );
  }
}

export default Dashboard;
