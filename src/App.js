import React, { Component } from 'react';
import './App.css';
import fetchData from './app/APIConnector/fetchData'


class App extends Component {
  state = {
    apiRes: 'hehe'
  }
  async componentWillMount() {
    const res = await fetchData();
    this.setState({
      apiRes: res
    })
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
