import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { Card, CardBody, CardHeader, Progress,Row, Col } from 'reactstrap';


class ProgressBarex extends Component{
    static propTypes = {
        name: PropTypes.number.isRequired, 
        percentage: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        connect: PropTypes.number.isRequired,
        contact: PropTypes.string.isRequired,
        hideconnect: PropTypes.number.isRequired
    }

    constructor() {
		super();
		this.state = {
			shown: true,
		};
	}	
	
	toggle() {
		this.setState({
			shown: !this.state.shown
		});
	}

    render(){   
		
		var hidden = {
			display: this.state.shown ? "none" : "block"
		}
        const contact = this.props.contact;
        if (contact === null){
            return (
                <div> 
                    <div id="category" style={{width : `${100-30}%`}}><h5>{this.props.title}</h5></div>
                    <div className="progress-bar" style={{width : `${100-30}%`}}>
                        <div className="progress-handle2" style={{width : `${this.props.percentage}%`}}>
                            {this.props.percentage}%
                        </div>
                    </div>
                    <br/>
                </div>
            )
        }
        else if (this.props.hideconnect === 0) {
            return (
                <div id="see">
                    <div id="category" onClick={(hide)=>{this.toggle(hide)}}><h3>{this.props.title}</h3></div>
                    <div className="progress-bar" onClick={(hide)=>{this.toggle(hide)}}>
                        <div className="progress-handle" style={{width : `${this.props.percentage}%`}}>
                            {this.props.percentage}%
                        </div>
                    </div>
                    <br/>
                    <div id="hide" className="setup1" style={hidden}>
                        {contact.map((contact, index) => { // Practicing this setState
                            return <ProgressBarex percentage={contact.percent} title={contact.title} hideconnect={contact.hideconnect}
                            connect={contact.connect} contact={contact.contact} name={contact.name} key = {index} />
                        })}
                    </div>             
                </div>
            )
            
        } else {
            return (
                <div id="see">
                    <div id="category" style={{width : `${100-15}%`}}  onClick={(hide)=>{this.toggle(hide)}}><h4>{this.props.title}</h4></div>
                    <div className={["progress-bar"]} style={{width : `${100-15}%`}} onClick={(hide)=>{this.toggle(hide)}}>
                        <div className="progress-handle1" style={{width : `${this.props.percentage}%`}}>
                            {this.props.percentage}%
                        </div>
                    </div>
                    <br/>
                    <div id="hide" className="setup2" style={hidden}>
                        {contact.map((contact, index) => { // Practicing this setState
                            return <ProgressBarex percentage={contact.percent} title={contact.title} hideconnect={contact.hideconnect}
                            connect={contact.connect} contact={contact.contact} name={contact.name} key = {index} />
                        })}  
                    </div>       
                </div>
            )
        }       
    }
}

export default ProgressBarex
