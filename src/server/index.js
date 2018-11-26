const path = require('path')
const fs = require('fs')
const express = require('express')

import React from 'react'
import ReactDOMServer  from 'react-dom/server'
import App from '../client/app'
import Html from '../client/html'


var server = express()

server.use(express.static('dist'))

server.get('/', (req, res) => {
    const appRendered = ReactDOMServer.renderToString(<App />);

    res.send(
        Html(
            appRendered
        )
    )
});

server.listen(3000, function() {
    console.log("Listening in port 3000.")
})
