import React from 'react'
import ReactDOM from 'react-dom'
import './main.scss'
import Main from './components/Main'

class App extends React.Component {
  render() {
    return (
      <div>
        <Main/>
      </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('App'))
