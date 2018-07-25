import React, { Component } from 'react'
import './App.css'
import fetchData from './app/APIConnector/fetchData'
import calculator from './app/Calculator/Calculator'


class App extends Component {
  state = {
    apiRes: [],
    output: [],
    isAppReady: false
  }

  componentWillMount() {
    this.prepareData()
  }

  prepareData = async () => {
    const res = await fetchData()
    let output = []

    res.RPN_data.map(({ task }) => output.push(task))

    output = output.map((e) => {
      return { input: e, answer: calculator(e) }
    })


    this.setState({
      output,
      apiRes: res.RPN_data,
      isAppReady: true
    })
  }

  renderData = (output) => {
    if (output.length === 0) {
      return <h1>ERROR</h1>
    }

    return output.map(x => this.renderOutput(x))
  }

  renderOutput = ({ input, answer }) => {
    return (
      <div key={input}>
        {input} =
        <h1>{answer}</h1>
      </div>
    )
  }

  render() {
    const { output, isAppReady } = this.state

    return (
      <div>
        {isAppReady ?
          this.renderData(output) : 'Loading'
        }
      </div>
    )
  }
}

export default App
