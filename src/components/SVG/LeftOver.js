import React, { Component } from 'react';

class LeftOver extends Component {
	constructor(props) {
		super(props);
		this.state = {
			strokeColour: '#05c793',
			fillColour: 'white',
			modalData: {
				className: 'LeftOver Food',
				disposalDescription: 'Toss it in the green bin',
				svgLink: 'LeftOver',
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
		<svg onClick={() => this.addModalToDisplay()} onMouseEnter={this.onEnterButton} onMouseLeave={this.onLeaveButton} xmlns="http://www.w3.org/2000/svg" width="218" height="286" viewBox="0 0 218 286">
		  <g id="Group_186" data-name="Group 186" transform="translate(6476 -17759)">
		    <g id="Group_176" data-name="Group 176" transform="translate(-6476.343 17758.734)">
		      <g id="Ellipse_10" data-name="Ellipse 10" transform="translate(0.343 0.266)" fill={this.state.fillColour} stroke={this.state.strokeColour} stroke-width="5">
		        <circle cx="108" cy="108" r="108" stroke="none"/>
		        <circle cx="108" cy="108" r="105.5" fill="none"/>
		      </g>
		      <g id="noun_leftover_food_2130851" data-name="noun_leftover food_2130851" transform="translate(51.678 42.769)">
		        <g id="Group_164" data-name="Group 164" transform="translate(0 0)">
		          <path id="Path_67" data-name="Path 67" d="M105.434,65.944a2.368,2.368,0,0,0-2.378.216,12.954,12.954,0,0,1-21.189-9.946v-1.3a2.351,2.351,0,0,0-1.514-2.162,12.694,12.694,0,0,1-8-17.3,2.369,2.369,0,0,0,0-1.73c-.216-.649-.649-.865-1.3-1.081A61.428,61.428,0,0,0,55.487,30.7C30.406,30.7,9.649,45.835,8.351,64.863A9.584,9.584,0,0,0,6.405,82.809v1.73a16.425,16.425,0,0,0,16.433,16.433h65.3a16.425,16.425,0,0,0,16.433-16.433v-1.73a9.532,9.532,0,0,0,2.595-15.352A5.828,5.828,0,0,0,105.434,65.944ZM55.487,35.024a59.677,59.677,0,0,1,12.325,1.3,16.15,16.15,0,0,0-.649,4.324A17.273,17.273,0,0,0,77.542,56.43h0A15.071,15.071,0,0,0,79.7,64.646H12.676C14.189,48,32.784,35.024,55.487,35.024ZM44.892,84.971l-21.189-16H57.649Zm-34.379-16h6.054l14.27,10.595H10.514A5.492,5.492,0,0,1,5.108,74.16,5.31,5.31,0,0,1,10.514,68.971ZM88.136,96.863h-65.3A12.46,12.46,0,0,1,10.514,84.539V83.89H36.46l7.568,5.838a3.073,3.073,0,0,0,1.3.432,1.966,1.966,0,0,0,1.73-.865l4.108-5.405h49.3v.649A12.46,12.46,0,0,1,88.136,96.863Zm12.325-17.3H54.406l8.433-10.595H83.163a17.028,17.028,0,0,0,21.189,1.73,5.642,5.642,0,0,1,1.514,3.676A5.31,5.31,0,0,1,100.461,79.566Z" transform="translate(-1 29.625)" fill={this.state.strokeColour}/>
		          <path id="Path_68" data-name="Path 68" d="M31.97,45.911a2.051,2.051,0,1,0,3.892-1.3l-1.3-3.243a2.051,2.051,0,0,0-3.892,1.3Z" transform="translate(33.328 40.361)" fill={this.state.strokeColour}/>
		          <path id="Path_69" data-name="Path 69" d="M21.97,48.008a1.937,1.937,0,0,0,2.595-1.3l1.3-3.243a2.051,2.051,0,0,0-3.892-1.3l-1.3,3.243A2.1,2.1,0,0,0,21.97,48.008Z" transform="translate(21.706 41.29)" fill={this.state.strokeColour}/>
		          <path id="Path_70" data-name="Path 70" d="M14.77,45.108a1.937,1.937,0,0,0,2.595-1.3l1.3-3.243a1.937,1.937,0,0,0-1.3-2.595,1.937,1.937,0,0,0-2.595,1.3l-1.3,3.243A2.014,2.014,0,0,0,14.77,45.108Z" transform="translate(13.338 37.92)" fill={this.state.strokeColour}/>
		          <path id="Path_71" data-name="Path 71" d="M27.27,42.308a1.937,1.937,0,0,0,2.595-1.3l1.3-3.243a2.051,2.051,0,0,0-3.892-1.3l-1.3,3.243A2.014,2.014,0,0,0,27.27,42.308Z" transform="translate(27.866 34.666)" fill={this.state.strokeColour}/>
		          <path id="Path_72" data-name="Path 72" d="M136.569,20.746c-6.054-6.054-16.649-1.946-16.865,6.7H102.623C97,26.368,85.758,21.611,73.65,16.422,57.649,9.719,41.217,2.8,34.082,2.8h0A33.221,33.221,0,0,0,1,35.882,32.784,32.784,0,0,0,6.838,54.693a2.189,2.189,0,0,0,1.514.865,2.455,2.455,0,0,0,1.73-.649,11.41,11.41,0,0,1,19.46,4.973A2.14,2.14,0,0,0,33,60.963a16.177,16.177,0,0,1,7.351-3.892,2.136,2.136,0,0,0,1.514-1.514c3.243-14.054,22.919-14.7,27.46-1.081a2.249,2.249,0,0,0,2.811,1.3c8.433-3.676,24-10.595,30.271-11.676h17.081c.216,9.3,10.595,9.946,9.946,9.514a10.06,10.06,0,0,0,9.946-9.946,9.526,9.526,0,0,0-3.892-7.784C140.245,31.773,140.678,25.071,136.569,20.746Zm-64,29.838C65.433,35.233,43.163,36.963,38.19,52.963a26.534,26.534,0,0,0-5.622,2.595,15.545,15.545,0,0,0-14.054-8.865h0A15.351,15.351,0,0,0,9,49.936a29.827,29.827,0,0,1-3.676-14.27A28.884,28.884,0,0,1,34.082,6.908h0c6.487,0,23.135,7.135,37.838,13.406,9.946,4.324,19.46,8.216,25.946,10.162a11.979,11.979,0,0,0,0,9.946C91.38,42.584,82.082,46.476,72.569,50.584Zm56.866-12.973h0a5.622,5.622,0,1,1,0,11.243v0a5.583,5.583,0,0,1-5.622-5.622V41.5a2.217,2.217,0,0,0-2.162-2.162h-19.46c-.649,0-1.3-1.514-1.3-3.892s.865-3.892,1.514-3.892h19.46a2.167,2.167,0,0,0,2.162-2.162v-1.73a5.634,5.634,0,0,1,5.838-5.622c7.351,0,7.568,11.46,0,11.46h0a2.167,2.167,0,0,0-2.162,2.162C127.272,36.746,128.353,37.611,129.434,37.611Z" transform="translate(-1 -2.8)" fill={this.state.strokeColour}/>
		          <path id="Path_73" data-name="Path 73" d="M6.949,18.461a2.14,2.14,0,0,0,3.027,3.027,2.09,2.09,0,0,0,0-3.027A2.6,2.6,0,0,0,6.949,18.461Z" transform="translate(5.16 14.836)" fill={this.state.strokeColour}/>
		          <path id="Path_74" data-name="Path 74" d="M9.349,13.361a2.14,2.14,0,0,0,3.027,3.027,2.09,2.09,0,0,0,0-3.027A2.592,2.592,0,0,0,9.349,13.361Z" transform="translate(7.949 8.909)" fill={this.state.strokeColour}/>
		          <path id="Path_75" data-name="Path 75" d="M14.249,17.749a2.14,2.14,0,1,0,3.027,0A2.09,2.09,0,0,0,14.249,17.749Z" transform="translate(13.644 13.819)" fill={this.state.strokeColour}/>
		          <path id="Path_76" data-name="Path 76" d="M31.549,16.249a2.14,2.14,0,1,0,3.027,0A2.09,2.09,0,0,0,31.549,16.249Z" transform="translate(33.75 12.076)" fill={this.state.strokeColour}/>
		          <path id="Path_77" data-name="Path 77" d="M24.249,11.261a2.14,2.14,0,1,0,3.027,0A2.6,2.6,0,0,0,24.249,11.261Z" transform="translate(25.266 6.468)" fill={this.state.strokeColour}/>
		          <path id="Path_78" data-name="Path 78" d="M15.949,10.249a2.14,2.14,0,1,0,3.027,0A2.09,2.09,0,0,0,15.949,10.249Z" transform="translate(15.619 5.103)" fill={this.state.strokeColour}/>
		          <path id="Path_79" data-name="Path 79" d="M21.049,15.949a2.14,2.14,0,1,0,3.027,0A2.087,2.087,0,0,0,21.049,15.949Z" transform="translate(21.547 11.727)" fill={this.state.strokeColour}/>
		          <path id="Path_80" data-name="Path 80" d="M39.849,17.149a2.14,2.14,0,1,0,3.027,0A2.09,2.09,0,0,0,39.849,17.149Z" transform="translate(43.396 13.122)" fill={this.state.strokeColour}/>
		        </g>
		      </g>
		    </g>
		    <text id="Leftover_Food" data-name="Leftover Food" transform="translate(-6361 18033)" fill="#05c793" font-size="32" font-family="AvenirNext-DemiBold, Avenir Next" font-weight="300"><tspan x="-102.496" y="0">Leftover Food</tspan></text>
		  </g>
		</svg>
	    )
	}
};

export default LeftOver;