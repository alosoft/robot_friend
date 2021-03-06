import React, {Component} from 'react';
// import {robots} from "./robots";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll';

// const state = {
//     robots: robots,
//     searchfield: ''
// };

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
    // console.log('constructor')
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    // console.log('componentDidMount')
  }

  // this function tracks event in search box
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
    // console.log(event.target.value);

    // console.log(filteredRobots);
  };

  render() {
    //const { robots, searchfield } = this.state; // with this there's no need to use this.state
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    // console.log('render');
    if (!this.state.robots) { // if (this.state.robots === 0) or ternary expression
      return <h1>Loading</h1>
    } else {
      return (
          <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
              <CardList robots={filteredRobots}/>
            </Scroll>
          </div>
      )
    }
  }
}

export default App;