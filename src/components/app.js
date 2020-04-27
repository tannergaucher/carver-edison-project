import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'semantic-styles'
import '../styles/local.css'

import { LoginPage, ThanksPage, ExpensePage } from '../pages'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/thanks">
          <ThanksPage />
        </Route>
        <Route path="/">
          <ExpensePage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
