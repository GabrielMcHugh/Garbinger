import React, { Component } from 'react';

import Card from './components/Card';
import Heart from './components/heart';

import GYG from './components/SVG/GYG';
import BoostJuice from './components/SVG/BoostJuice';
import LeftOver from './components/SVG/LeftOver';
import SushiTray from './components/SVG/SushiTray';
import Coffee from './components/SVG/Coffee';
import Cutlery from './components/SVG/Cutlery';
import DrinkCan from './components/SVG/DrinkCan';
import RiceBowl from './components/SVG/RiceBowl';
import { ReactComponent as Waste } from './images/waste_collection.svg';


// Buttons (https://github.com/rcaferati/react-awesome-button)
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
        statsPage: false,
        thankYouPage: false,
        itemPage: false,
        showModal: false,
        fillColour: 'blue',
        awesomeButtonVisibility: true, //It appears above modal so must disable
        selectedItems: [],
        weight: 0,
        lastWeight: 0,
    }
  }

  /* TODO: The app polls the server regularly. If the weight
  changes it updates the state.itemPage (using getItems() )
  */

  componentDidMount() {
    //inside some class method
    setInterval(this.getItems, 400);
  }

  getItems = () => {
    fetch('http://localhost:3333/update')
      .then(result => {if (result.status === 200 && !this.itemPage) {
        this.setState({itemPage : true})
        console.log("itempage is now true")
      }
    })
  }

  showModal = () => {
    this.getWeight();
    this.setState({ show: true, awesomeButtonVisibility: false,});
  }
  
  hideModal = () => {
    this.setState({ show: false, awesomeButtonVisibility: true, statsPage: true, selectedItems: [], });
  }

  goToThankYouPage = () => {
    setTimeout(() => {
      this.setState({statsPage: false, thankYouPage: true});
    }, 500);
    setTimeout(() => {
      this.setState({itemPage: false, statsPage: false, thankYouPage: false});
    }, 2000);
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

  getWeight = async () => {
    fetch('http://localhost:3333/')
      .then(response => response.text())
      .then(weight => {
        console.log(typeof this.state.lastWeight);
        const floatWeight = parseFloat(weight).toFixed(2);
        if (floatWeight > this.state.lastWeight) {
          var newWeight = (floatWeight - this.state.lastWeight);
          this.setState({weight: newWeight, lastWeight: floatWeight})
        } else {
          this.setState({weight: 0})
        }
        })
  }

  /*
  5.6 - 0 = 5.6
  weight = 5.6
  lastweight = 5.6

  12.4 - 5.6 = 4.8
  new weight = 4.8
  lastweight = 12.4


  */


  render () {

    return( this.state.thankYouPage ?
        <main>
          <h1 className="dark-blue"><span role="img" aria-label="heart">&#x1F49A;</span>Your Awesome</h1>
          <Waste/>
          <p className="blue">and we have recored 133 Thank-you's for him this week.</p>
          <p className="gray">See you next time!</p>
        </main>
      : this.state.statsPage ?
        <main>
          <h1><span role="img" aria-label="rubbish">&#128465;</span>Thank You!</h1>
          <div className="flex items-center w-95">
            <div className="flex pa4">
              <div><img src={require('./images/Bin.png')} className="h5"/></div>
              <div className="ma3">
                <h3 className="dark-blue">YOU JUST RECYCLED</h3>
                <h1 className="navy weightReading">{this.state.weight} lbs</h1>
                <p className="blue">Isn't that awesome?</p>
              </div>
            </div>
            <div className="flex pa4">
              <div><img src={require('./images/Turtle.png')} className="h5"/></div>
              <div className="ma3">
                <h3 className="dark-blue">DID YOU KNOW?</h3>
                <h1 className="navy f-subheadline lh-title">52%</h1>
                <p className="blue">of all turtles have eaten plastic?</p>
              </div>
            </div>
          </div>
          <div className="flex flex-column items-center">
            <p className="blue">Great Job! We understand that recycling is more than a feel-good experience. Show gratitude towards the person whollects wast from this bin!</p>
            <div onClick={this.goToThankYouPage}>
              <AwesomeButton type="primary">Thank them!<Heart/></AwesomeButton>
            </div>
            <p className="gray">It will only take two seconds to click the button above and it will mean the world to them</p>
          </div>
        </main>
      : this.state.itemPage ?
      <main>
        <h1><span role="img" aria-label="waving-hand">&#x1f44b;</span> Hi!</h1>
        <p>We understand recyling can be hard. Select what you are disposing and we will help you out!</p>
        <div class="flex flex-wrap">

          <GYG onClick={this.addItem} onSecClick={this.removeItem}/>
          <BoostJuice onClick={this.addItem} onSecClick={this.removeItem}/>
          <LeftOver onClick={this.addItem} onSecClick={this.removeItem}/>
          <SushiTray onClick={this.addItem} onSecClick={this.removeItem}/>
          <Coffee onClick={this.addItem} onSecClick={this.removeItem}/>
          <Cutlery onClick={this.addItem} onSecClick={this.removeItem}/>
          <RiceBowl onClick={this.addItem} onSecClick={this.removeItem}/>
          <DrinkCan onClick={this.addItem} onSecClick={this.removeItem}/>

        </div>
        <div onClick={this.showModal}><AwesomeButton type="primary" visible={this.state.awesomeButtonVisibility}>Select Items</AwesomeButton></div>

        <Modal show={this.state.show} handleClose={this.hideModal}>
          {
            this.state.selectedItems.map((data, index) => {
              return ( 
                <Card
                key={index}
                title={data.className}
                description={data.disposalDescription}
                img={data.svgLink}
                />
              );
            })
          }
        </Modal>

      </main>
      : 
      <main>
          <h1 className="dark-blue"><span role="img" aria-label="heart">&#x1F49A;</span>Toss in some Rubbish!</h1>
          <Waste/>
          <p className="blue">Please!</p>
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
        <div className='flex flex-wrap'>
        {children}
        </div>
        <div><AwesomeButton onPress={handleClose} type="primary">Proceed</AwesomeButton></div>
      </section>
    </div>
  );
}


const container = document.createElement('div');
document.body.appendChild(container);
