import React from 'react';

function ItemBubble({buttonImage, showModal}) {

	function changeBackground(e) {
    	e.target.style.fill = 'blue';
  	}

  	function revertBackground(e) {
    	e.target.style.fill = 'none';
  	}


  	return (
  		<img src={buttonImage} onMouseOver={changeBackground} onMouseLeave={revertBackground}/>
  	)

}

export default ItemBubble;