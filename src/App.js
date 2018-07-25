import React, { Component } from 'react';
import './App.css';
import fetchData from './app/APIConnector/fetchData'
import calculator from './app/Calculator/Calculator'


class App extends Component {
  state = {
    apiRes: 'hehe'
  }
  async componentWillMount() {
    const res = await fetchData();
    this.setState({
      apiRes: res
    })
    console.log(calculator(res.RPN_data[1].task))
  }

  render() {
    const { apiRes } = this.state;

    return (
      <div>
        {apiRes.hasOwnProperty('RPN_data') ? apiRes.RPN_data[0].task : apiRes}
      </div>
    );
  }
}

export default App;
