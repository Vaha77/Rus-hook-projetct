import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import TopBar from './node_modules/pages/components/topBar'
import Routes from 'routes'

const App = () => {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
