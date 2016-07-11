#!/bin/bash
./node_modules/.bin/mocha --reporter mochawesome
open mochawesome-reports/mochawesome.html

