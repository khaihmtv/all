"use strict";

const express = require('express');
const app = express();
const port = 3000;
let hbs = require('express-hbs');

// Do Registration routes.
app.use(require('./app/routes'));
