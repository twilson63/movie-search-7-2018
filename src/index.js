/* global document */
import React from 'react'
import ReactDOM from 'react-dom'
import Component from '@reactions/component'
import './index.css'

import App from './app'

ReactDOM.render(
  <Component initialState={{ movies: [] }}>{App}</Component>,
  document.getElementById('app')
)
