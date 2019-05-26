import React, { Component } from 'react';
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Col, Collapse, Fade, Row } from 'reactstrap';

class Collapses extends Component {

  constructor(props) {
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleCustom = this.toggleCustom.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: false,
      accordion: [false, false, false],
      accordion2: [false, false, false],
      custom: [true, false],
      status: 'Closed',
      fadeIn: true,
      timeout: 300,
    };
  }

  onEntering() {
    this.setState({ status: 'Opening...' });
  }

  onEntered() {
    this.setState({ status: 'Opened' });
  }

  onExiting() {
    this.setState({ status: 'Closing...' });
  }

  onExited() {
    this.setState({ status: 'Closed' });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleAccordion(tab) {

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      accordion: state,
    });
  }

  toggleAccordion2(tab) {

    const prevState = this.state.accordion2;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      accordion2: state,
    });
  }

  toggleCustom(tab) {

    const prevState = this.state.custom;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      custom: state,
    });
  }

  toggleFade() {
    this.setState({ fadeIn: !this.state.fadeIn });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          
          <Col xl="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Collapse <small>accordion</small>
                <div className="card-header-actions">
                  <Badge>NEW</Badge>
                </div>
              </CardHeader>
              <CardBody>
                <div id="accordion">
                  <Card className="mb-0">
                    <CardHeader id="headingOne">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                        <h5 className="m-0 p-0">Collapsible Group Item #1</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                      <CardBody>
                        

                      <div id="accordion2">
                  
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion2(0)} aria-expanded={this.state.accordion2[0]} aria-controls="collapseOne2">
                        <h5 className="m-0 p-0">Collapsible Group Item #1</h5>
                      </Button>
                    <Collapse isOpen={this.state.accordion2[0]} data-parent="#accordion2" id="collapseOne" aria-labelledby="headingOne2">
                    hello
                    </Collapse>
                  
                  <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion2(1)} aria-expanded={this.state.accordion2[1]} aria-controls="collapseTwo2">
                        <h5 className="m-0 p-0">Collapsible Group Item #2</h5>
                      </Button>
                    <Collapse isOpen={this.state.accordion2[1]} data-parent="#accordion2" id="collapseTwo2">
                    </Collapse>
                  
                  
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion2(2)} aria-expanded={this.state.accordion2[2]} aria-controls="collapseThree2">
                        <h5 className="m-0 p-0">Collapsible Group Item #3</h5>
                      </Button>
                  
                    <Collapse isOpen={this.state.accordion2[2]} data-parent="#accordion2" id="collapseThree2">
                  
                    </Collapse>
                  
                </div>



                        
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingTwo">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                        <h5 className="m-0 p-0">Collapsible Group Item #2</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                      <CardBody>
                        test
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingThree">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                        <h5 className="m-0 p-0">Collapsible Group Item #3</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseThree">
                      <CardBody>
                        test
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </CardBody>
            </Card>
            </Col>
        </Row>
      </div>
    );
  }
}

export default Collapses;


// import React, { Component } from 'react';
// import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Col, Collapse, Fade, Row } from 'reactstrap';

// class Collapses extends Component {

//   constructor(props) {
//     super(props);
//     this.onEntering = this.onEntering.bind(this);
//     this.onEntered = this.onEntered.bind(this);
//     this.onExiting = this.onExiting.bind(this);
//     this.onExited = this.onExited.bind(this);
//     this.toggle = this.toggle.bind(this);
//     this.toggleAccordion = this.toggleAccordion.bind(this);
//     this.toggleCustom = this.toggleCustom.bind(this);
//     this.toggleFade = this.toggleFade.bind(this);
//     this.state = {
//       collapse: false,
//       accordion: [true, false, false],
//       custom: [true, false],
//       status: 'Closed',
//       fadeIn: true,
//       timeout: 300,
//     };
//   }

//   onEntering() {
//     this.setState({ status: 'Opening...' });
//   }

//   onEntered() {
//     this.setState({ status: 'Opened' });
//   }

//   onExiting() {
//     this.setState({ status: 'Closing...' });
//   }

//   onExited() {
//     this.setState({ status: 'Closed' });
//   }

//   toggle() {
//     this.setState({ collapse: !this.state.collapse });
//   }

//   toggleAccordion(tab) {

//     const prevState = this.state.accordion;
//     const state = prevState.map((x, index) => tab === index ? !x : false);

//     this.setState({
//       accordion: state,
//     });
//   }

//   toggleCustom(tab) {

//     const prevState = this.state.custom;
//     const state = prevState.map((x, index) => tab === index ? !x : false);

//     this.setState({
//       custom: state,
//     });
//   }

//   toggleFade() {
//     this.setState({ fadeIn: !this.state.fadeIn });
//   }

//   render() {
//     return (
//       <div className="animated fadeIn">
//         <Row>
//           <Col xl="6">
//             <Card>
//               <CardHeader>
//                 <i className="fa fa-align-justify"></i><strong>Collapse</strong>
//                 <div className="card-header-actions">
//                   <a href="https://reactstrap.github.io/components/collapse/" rel="noreferrer noopener" target="_blank" className="card-header-action">
//                     <small className="text-muted">docs</small>
//                   </a>
//                 </div>
//               </CardHeader>
//               <Collapse isOpen={this.state.collapse} onEntering={this.onEntering} onEntered={this.onEntered} onExiting={this.onExiting} onExited={this.onExited}>
//                 <CardBody>
//                   <p>
//                     Anim pariatur cliche reprehenderit,
//                     enim eiusmod high life accusamus terry richardson ad squid. Nihil
//                     anim keffiyeh helvetica, craft beer labore wes anderson cred
//                     nesciunt sapiente ea proident.
//                   </p>
//                   <p>
//                     Donec molestie odio id nisi malesuada, mattis tincidunt velit egestas. Sed non pulvinar risus. Aenean
//                     elementum eleifend nunc, pellentesque dapibus arcu hendrerit fringilla. Aliquam in nibh massa. Cras
//                     ultricies lorem non enim volutpat, a eleifend urna placerat. Fusce id luctus urna. In sed leo tellus.
//                     Mauris tristique leo a nisl feugiat, eget vehicula leo venenatis. Quisque magna metus, luctus quis
//                     sollicitudin vel, vehicula nec ipsum. Donec rutrum commodo lacus ut condimentum. Integer vel turpis
//                     purus. Etiam vehicula, nulla non fringilla blandit, massa purus faucibus tellus, a luctus enim orci non
//                     augue. Aenean ullamcorper nisl urna, non feugiat tortor volutpat in. Vivamus lobortis massa dolor, eget
//                     faucibus ipsum varius eget. Pellentesque imperdiet, turpis sed sagittis lobortis, leo elit laoreet arcu,
//                     vehicula sagittis elit leo id nisi.
//                   </p>
//                 </CardBody>
//               </Collapse>
//               <CardFooter>
//                 <Button color="primary" onClick={this.toggle} className={'mb-1'} id="toggleCollapse1">Toggle</Button>
//                 <hr/>
//                 <h5>Current state: {this.state.status}</h5>
//               </CardFooter>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <i className="fa fa-align-justify"></i><strong>Fade</strong>
//                 <div className="card-header-actions">
//                   <a href="https://reactstrap.github.io/components/fade/" rel="noreferrer noopener" target="_blank" className="card-header-action">
//                     <small className="text-muted">docs</small>
//                   </a>
//                 </div>
//               </CardHeader>
//               <CardBody>
//                 <Fade timeout={this.state.timeout} in={this.state.fadeIn} tag="h5" className="mt-3">
//                   This content will fade in and out as the button is pressed...
//                 </Fade>
//               </CardBody>
//               <CardFooter>
//                 <Button color="primary" onClick={this.toggleFade} id="toggleFade1">Toggle Fade</Button>
//               </CardFooter>
//             </Card>
//           </Col>
//           <Col xl="6">
//             <Card>
//               <CardHeader>
//                 <i className="fa fa-align-justify"></i> Collapse <small>accordion</small>
//                 <div className="card-header-actions">
//                   <Badge>NEW</Badge>
//                 </div>
//               </CardHeader>
//               <CardBody>
//                 <div id="accordion">
//                   <Card className="mb-0">
//                     <CardHeader id="headingOne">
//                       <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
//                         <h5 className="m-0 p-0">Collapsible Group Item #1</h5>
//                       </Button>
//                     </CardHeader>
//                     <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
//                       <CardBody>
//                         1. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
//                         cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
//                         on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
//                         nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
//                         beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
//                       </CardBody>
//                     </Collapse>
//                   </Card>
//                   <Card className="mb-0">
//                     <CardHeader id="headingTwo">
//                       <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
//                         <h5 className="m-0 p-0">Collapsible Group Item #2</h5>
//                       </Button>
//                     </CardHeader>
//                     <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
//                       <CardBody>
//                         2. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
//                         cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
//                         on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
//                         nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
//                         beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
//                       </CardBody>
//                     </Collapse>
//                   </Card>
//                   <Card className="mb-0">
//                     <CardHeader id="headingThree">
//                       <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
//                         <h5 className="m-0 p-0">Collapsible Group Item #3</h5>
//                       </Button>
//                     </CardHeader>
//                     <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseThree">
//                       <CardBody>
//                         3. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
//                         cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
//                         on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
//                         nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
//                         beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
//                       </CardBody>
//                     </Collapse>
//                   </Card>
//                 </div>
//               </CardBody>
//             </Card>
//             </Col>
//         </Row>
//       </div>
//     );
//   }
// }

// export default Collapses;
