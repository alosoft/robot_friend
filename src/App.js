import React, {Component} from 'react';
import {robots} from "./robots";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import './App.css'

// const state = {
//     robots: robots,
//     searchfield: ''
// };

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  // this function tracks event in search box
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
    // console.log(event.target.value);

    // console.log(filteredRobots);
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <CardList robots={filteredRobots}/>
        </div>
    )
  }
}

export default App;