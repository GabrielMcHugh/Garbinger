import React, {Component} from 'react';

class BoostJuice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			strokeColour: '#ce123e',
			fillColour: 'white',
			modalFlag: false, //has it been added already?
			modalData: {
				className: 'BoostJuice',
				disposalDescription: 'Just toss it in the trash',
				svgLink: 'NA',
			},
		}
	}

	changeColour = () => {
    	this.setState({strokeColour: 'white', fillColour: '#ce123e'});
  	}

    revertColour = () => {
        this.setState({strokeColour: '#ce123e', fillColour: 'white'});
    }

    addModalToDisplay = () => {
    	console.log('got here');
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
	     <svg onClick={() => this.addModalToDisplay()} onMouseEnter={this.onEnterButton} onMouseLeave={this.onLeaveButton} xmlns="http://www.w3.org/2000/svg" width="240" height="277" viewBox="0 0 240 277" fill={this.state.strokeColour}>
		  <g id="Group_187" data-name="Group 187" transform="translate(6218 -17569)">
		    <g id="Group_179" data-name="Group 179" transform="translate(-6206.726 17568.875)">
		      <g id="Ellipse_4" data-name="Ellipse 4" transform="translate(-0.274 0.125)" fill={this.state.fillColour} stroke={this.state.strokeColour} stroke-width="5">
		        <circle cx="108.5" cy="108.5" r="108.5" stroke="none"/>
		        <circle cx="108.5" cy="108.5" r="106" fill="none"/>
		      </g>
		      <g id="soft-drink" transform="translate(68.488 38.601)">
		        <path id="Path_49" data-name="Path 49" d="M44.212,0H34.9a2.327,2.327,0,0,0-2.327,2.327V30.25H2.327A2.327,2.327,0,0,0,0,32.577V44.212a2.327,2.327,0,0,0,2.327,2.327H7.148l6.814,90.926a2.327,2.327,0,0,0,2.327,2.152H62.827a2.327,2.327,0,0,0,2.327-2.152l6.814-90.926h4.821a2.327,2.327,0,0,0,2.327-2.327V32.577a2.327,2.327,0,0,0-2.327-2.327H46.539V2.327A2.327,2.327,0,0,0,44.212,0ZM37.231,4.654h4.654v25.6H37.231ZM60.667,134.963H18.448L11.816,46.539H67.3ZM74.462,41.885H4.654V34.9H74.462Zm0,0" fill={this.state.strokeColour}/>
		        <path id="Path_50" data-name="Path 50" d="M66.484,215.747l4.64-.357,1.611,20.944-4.64.357Zm0,0" transform="translate(-47.146 -152.74)" fill={this.state.strokeColour}/>
		        <path id="Path_51" data-name="Path 51" d="M64.02,183.741l4.64-.358.359,4.654-4.64.358Zm0,0" transform="translate(-45.398 -130.043)" fill={this.state.strokeColour}/>
		      </g>
		    </g>
		    <text id="Boost_Juice_Cup" data-name="Boost Juice Cup" transform="translate(-6098 17834)" fill="#ce123e" font-size="32" font-family="AvenirNext-DemiBold, Avenir Next" font-weight="300"><tspan x="-119.36" y="0">Boost Juice Cup</tspan></text>
		  </g>
		</svg>
	   )

	}
};

export default BoostJuice;