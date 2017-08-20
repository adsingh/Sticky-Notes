import React from 'react'
import ReactDOM from 'react-dom'
import Board from './Board'

var app = document.getElementById('react-container');

ReactDOM.render(<Board count={10} />, app);