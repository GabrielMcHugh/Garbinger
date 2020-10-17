import React, { Component } from 'react';

class GYG extends Component {
	constructor(props) {
		super(props);
		this.state = {
			strokeColour: '#05c793',
			fillColour: 'white',
			modalData: {
				className: 'GYG',
				disposalDescription: 'Tear it apart and deposit in the bin',
				svgLink: 'GYG',
			}
		}
	}

	changeColour = () => {
		let strokeColour = this.state.strokeColour;
		let fillColour = this.state.fillColour;
    	this.setState({strokeColour: fillColour, fillColour: strokeColour});
  	}

    revertColour = () => {
    	let strokeColour = this.state.strokeColour;
		let fillColour = this.state.fillColour;
        this.setState({strokeColour: fillColour, fillColour: strokeColour});
    }

    addModalToDisplay = () => {
    	if (!this.state.modalFlag) {
    		this.props.onClick(this.state.modalData)
    		this.setState({modalFlag: true})
    		//keep the button highlighted
    	} else {//if its already been clicked,
    		this.props.onSecClick(this.state.modalData.className)
    		this.setState({modalFlag: false})
    	}
    }

    onEnterButton = () => {
    	if (!this.state.modalFlag) {
    		this.changeColour()
    	}
    }

    onLeaveButton = () => {
    	if (!this.state.modalFlag) {
    		this.revertColour()
    	}
    }

	render() {

	   return (
	     <svg onClick={() => this.addModalToDisplay()} onMouseEnter={this.onEnterButton} onMouseLeave={this.onLeaveButton}  xmlns="http://www.w3.org/2000/svg" width="278" height="281" viewBox="0 0 278 281">
		  <g id="Group_189" data-name="Group 189" transform="translate(5890 -17587)">
		    <g id="Group_178" data-name="Group 178" transform="translate(-5866.888 17587.08)">
		      <g id="GYG1" data-name="Ellipse 9" transform="translate(-0.112 -0.08)" fill={this.state.fillColour} stroke={this.state.strokeColour} stroke-width="5">
		        <circle cx="108.5" cy="108.5" r="108.5" stroke="none"/>
		        <circle cx="108.5" cy="108.5" r="106" fill="none"/>
		      </g>
		      <g id="Group_166" data-name="Group 166" transform="translate(34.932 65.829)">
		        <g id="Group_16" data-name="Group 16" transform="translate(0)">
		          <path id="Path_29" data-name="Path 29" d="M162.786,275.185h-2.191l-6.078-25.993a17.747,17.747,0,0,0-17.351-13.761H47.718a17.747,17.747,0,0,0-17.351,13.762l-6.078,25.993H22.1a3.1,3.1,0,0,0,0,6.2h2.192l6.076,25.991a17.747,17.747,0,0,0,17.351,13.761h89.447a17.747,17.747,0,0,0,17.351-13.761l6.08-25.991h2.189a3.1,3.1,0,1,0,0-6.2ZM31.82,270.2h93.921a3.1,3.1,0,0,0,0-6.2H33.269L36.4,250.6a11.574,11.574,0,0,1,11.316-8.975h89.447a11.575,11.575,0,0,1,11.316,8.975l5.748,24.582H30.654Zm76.271,11.185v3.344a5.372,5.372,0,0,1-5.366,5.366H82.159a5.372,5.372,0,0,1-5.366-5.366v-3.344Zm40.39,24.579a11.575,11.575,0,0,1-11.316,8.975H47.718A11.574,11.574,0,0,1,36.4,305.962l-5.746-24.58H70.6v3.344A11.576,11.576,0,0,0,82.159,296.29h20.567a11.576,11.576,0,0,0,11.563-11.563v-3.344h39.943Z" transform="translate(-19 -235.43)" fill={this.state.strokeColour}/>
		        </g>
		      </g>
		    </g>
		    <text id="Guzman_Container" data-name="Guzman Container" transform="translate(-5751 17856)" fill="#05c793" font-size="32" font-family="AvenirNext-DemiBold, Avenir Next" font-weight="300"><tspan x="-138.608" y="0">Guzman Container</tspan></text>
		  </g>
		</svg>
	    )

	}
};

export default GYG;