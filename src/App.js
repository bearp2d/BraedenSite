import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './global.sass'
import MainArea from './main-area';

function App() {
  return (
      <div className="App">
        <Switch>
          <MainArea />
        </Switch>
      </div>
  );
}

export default App
