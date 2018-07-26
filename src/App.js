import React, { Component } from 'react'
import './App.css'
import fetchData from './app/APIConnector/fetchData'
import calculator from './app/Calculator/Calculator'
import Button from './app/components/button'


class App extends Component {
  state = {
    apiRes: [],
    output: [],
    isAppReady: false,
    showData: false
  }

  componentWillMount() {
    this.prepareData()
    document.title = 'This App is like ass - nice'
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
  handleClick = () => {
    this.setState(prevState => {
      return { showData: !prevState.showData }
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
    const { output, isAppReady, showData } = this.state

    return (
      <div>
        {isAppReady ?
          <div>
            <Button
              title={showData ? 'Press to hide output' : 'Press to show output'}
              onClick={() => this.handleClick()}
            />
            {showData &&
            this.renderData(output)}
          </div>

          : 'Loading'
        }
      </div>
    )
  }
}

export default App
