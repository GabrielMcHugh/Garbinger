import React, { Component } from 'react';
import GYG from './components/SVG/GYG';
import BoostJuice from './components/SVG/BoostJuice';


// Buttons (https://github.com/rcaferati/react-awesome-button)
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
        showModal: false,
        fillColour: 'blue',
        awesomeButtonVisibility: true, //It appears above modal so must disable
        selectedItems: [],
    }
  }

  componentDidMount(){
  }

  showModal = () => {
    this.setState({ show: true, awesomeButtonVisibility: false });
  }
  
  hideModal = () => {
    this.setState({ show: false, awesomeButtonVisibility: true });
  }

  changeColour = () => {
    this.setState({fillColour: 'red'});
  }

  revertColour = () => {
    this.setState({fillColour: 'blue'});
  }

  addItem = async (item) => {
    await this.setState({selectedItems: [...this.state.selectedItems, item]});
  }

  removeItem = async (className) => {
    var array = [...this.state.selectedItems]; // make a separate copy of the array
    var index = array.map(function(d) { return d.className; }).indexOf(className);
    if (index !== -1) {
      array.splice(index, 1);
      await this.setState({selectedItems: array});
    }
  }


  render () {

    return(
      <main>
        <h1><span role="img" aria-label="waving-hand">&#x1f44b;</span> Hi!</h1>
        <p>We understand recyling can be hard. Select what you are disposing and we will help you out!</p>
        <div class="flex flex-wrap">

          <GYG onClick={this.addItem} onSecClick={this.removeItem}/>
          <BoostJuice onClick={this.addItem} onSecClick={this.removeItem}/>

        </div>
        <div onClick={this.showModal}><AwesomeButton type="primary" visible={this.state.awesomeButtonVisibility}>Select Items</AwesomeButton></div>

        <Modal show={this.state.show} handleClose={this.hideModal} className="flex flex-wrap">
          {
            this.state.selectedItems.map((data, index) => {
              return ( 
                <div key={index}>
                <h1>{data.className}</h1>
                <p>{data.disposalDescription}</p> 
                </div>
              );
            })
          }
        </Modal>

      </main>
    )
  };
}

export default App;

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button
          onClick={handleClose}
        >
          Close
        </button>
      </section>
    </div>
  );
}


const container = document.createElement('div');
document.body.appendChild(container);
