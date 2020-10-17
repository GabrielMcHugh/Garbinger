import React, {Component} from 'react';

class BoostJuice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			strokeColour: '#ffd166',
			fillColour: 'white',
			modalFlag: false, //has it been added already?
			modalData: {
				className: 'Drink Can',
				disposalDescription: 'Toss into the Yellow Bin',
				svgLink: 'DrinkCan',
			},
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
     	<svg onClick={() => this.addModalToDisplay()} onMouseEnter={this.onEnterButton} onMouseLeave={this.onLeaveButton} xmlns="http://www.w3.org/2000/svg" width="217" height="277" viewBox="0 0 217 277">
		  <g id="Group_185" data-name="Group 185" transform="translate(6661 -17569)">
		    <g id="Group_175" data-name="Group 175" transform="translate(-6661 17568.875)">
		      <g id="Ellipse_13" data-name="Ellipse 13" transform="translate(0 0.125)" fill={this.state.fillColour} stroke={this.state.strokeColour} stroke-width="5">
		        <circle cx="108.5" cy="108.5" r="108.5" stroke="none"/>
		        <circle cx="108.5" cy="108.5" r="106" fill="none"/>
		      </g>
		      <g id="soft-drink_2_" data-name="soft-drink (2)" transform="translate(67.959 33.81)">
		        <path id="Path_52" data-name="Path 52" d="M82.025,11.635a8.739,8.739,0,0,1-8.289-6A2.907,2.907,0,0,0,72.717,0h-60.5A2.907,2.907,0,0,0,11.2,5.63a8.739,8.739,0,0,1-8.289,6A2.908,2.908,0,0,0,0,14.543V51.193a2.909,2.909,0,0,0,5.817,0V17.452H29.036a42.025,42.025,0,0,0,5.58,56.469,36.2,36.2,0,0,1,.479,53.458l-4.4,4.093H5.817V74.5A2.909,2.909,0,1,0,0,74.5v59.881a2.908,2.908,0,0,0,2.909,2.909,8.739,8.739,0,0,1,8.289,6,2.907,2.907,0,0,0,1.019,5.63h60.5a2.907,2.907,0,0,0,1.019-5.63,8.739,8.739,0,0,1,8.289-6,2.908,2.908,0,0,0,2.909-2.909V14.543A2.908,2.908,0,0,0,82.025,11.635Zm-67.488,0A14.487,14.487,0,0,0,17.16,5.817H67.774A14.486,14.486,0,0,0,70.4,11.635Zm37.924,88.858A42.109,42.109,0,0,0,38.5,69.591,36.2,36.2,0,0,1,36.51,17.622l.162-.17H52.789a42.012,42.012,0,0,0,.732,61.881A36.2,36.2,0,0,1,55.51,131.3l-.162.17H39.231A42.108,42.108,0,0,0,52.461,100.492Zm15.313,42.614H17.16a14.5,14.5,0,0,0-2.623-5.817H70.4A14.5,14.5,0,0,0,67.773,143.107Zm11.343-11.635H62.984A42.024,42.024,0,0,0,57.405,75a36.2,36.2,0,0,1-.479-53.458l4.4-4.093H79.116Zm0,0" transform="translate(0)" fill={this.state.strokeColour}/>
		        <path id="Path_53" data-name="Path 53" d="M46.577,358.817H64.125a2.909,2.909,0,1,0,0-5.817H46.577a2.909,2.909,0,1,0,0,5.817Zm0,0" transform="translate(-30.966 -250.324)" fill={this.state.strokeColour}/>
		        <path id="Path_54" data-name="Path 54" d="M46.577,406.817h11.15a2.909,2.909,0,1,0,0-5.817H46.577a2.909,2.909,0,1,0,0,5.817Zm0,0" transform="translate(-30.966 -284.362)" fill={this.state.strokeColour}/>
		        <path id="Path_55" data-name="Path 55" d="M206.852,143H193.909a2.909,2.909,0,0,0,0,5.817h12.944a2.909,2.909,0,0,0,0-5.817Zm0,0" transform="translate(-135.444 -101.406)" fill={this.state.strokeColour}/>
		        <path id="Path_56" data-name="Path 56" d="M216.071,191h-9.162a2.909,2.909,0,1,0,0,5.817h9.162a2.909,2.909,0,0,0,0-5.817Zm0,0" transform="translate(-144.663 -135.444)" fill={this.state.strokeColour}/>
		        <path id="Path_57" data-name="Path 57" d="M2.909,211.817a2.909,2.909,0,1,0-2.057-4.965,2.909,2.909,0,0,0,2.057,4.965Zm0,0" transform="translate(0 -146.081)" fill={this.state.strokeColour}/>
		      </g>
		    </g>
		    <text id="Drink_Can" data-name="Drink Can" transform="translate(-6566 17834)" fill="#ffd166" font-size="32" font-family="AvenirNext-DemiBold, Avenir Next" font-weight="300"><tspan x="-73.296" y="0">Drink Can</tspan></text>
		  </g>
		</svg>
	   )

	}
};

export default BoostJuice;