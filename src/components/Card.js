import React from 'react';

import GYG from '../images/Guzman Container.svg';
import BoostJuice from '../images/Boost Juice Cup.svg';
import LeftOver from '../images/Leftover Food.svg';
import SushiTray from '../images/Sushi Tray.svg';
import Coffee from '../images/Coffe Cup.svg';
import Cutlery from '../images/Cutlery.svg';
import DrinkCan from '../images/Drink Can.svg';
import RiceBowl from '../images/Kenko Rice Bowl.svg';



const Card = ({title, description, img}) => {

	let icon;

	switch (img) {
	  case 'GYG': icon = GYG;
	  break;
	  case 'BoostJuice': icon = BoostJuice;
	  break;
	  case 'LeftOver': icon = LeftOver;
	  break;
	  case 'SushiTray': icon = SushiTray;
	  break;
	  case 'Coffee': icon = Coffee;
	  break;
	  case 'Cutlery': icon = Cutlery;
	  break;
	  case 'DrinkCan': icon = DrinkCan;
	  break;
	  case 'RiceBowl': icon = RiceBowl;
	  break;
	  default:
	}



	return (
		<div className='dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='rubbishIcon' src={icon} width="150" />
			<div>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default Card;