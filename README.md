# tox-ccc-ui

[![GitHub version](https://badge.fury.io/gh/dasrick%2Ftox-ccc-ui.svg)](http://badge.fury.io/gh/dasrick%2Ftox-ccc-ui)
[![Build Status](https://travis-ci.org/dasrick/tox-ccc-ui.svg?branch=master)](https://travis-ci.org/dasrick/tox-ccc-ui)
[![dependency Status](https://david-dm.org/dasrick/tox-ccc-ui/status.svg)](https://david-dm.org/dasrick/tox-ccc-ui#info=dependencies)
[![devDependency Status](https://david-dm.org/dasrick/tox-ccc-ui/dev-status.svg)](https://david-dm.org/dasrick/tox-ccc-ui#info=devDependencies)
[![Codacy Badge](https://www.codacy.com/project/badge/019b587e008e45b29754f1fe617d5f5a)](https://www.codacy.com/public/dasrick/tox-ccc-ui)
[![Heroku Badge](http://img.shields.io/badge/staging%20to-Heroku-7056bf.svg)](https://tox-ccc-qa.herokuapp.com)
[![Heroku Badge](http://img.shields.io/badge/production%20to-Heroku-7056bf.svg)](https://tox-ccc.herokuapp.com)
[![InchCI Badge](http://inch-ci.org/github/dasrick/tox-ccc-ui.svg?branch=master)](http://inch-ci.org/github/dasrick/tox-ccc-ui)

## npm run ...

Here are some calls ...

The initial call will be almost

    npm install

The install call will automatically call the *build* task ... see next command

To build all parts of the app

    npm run build

If you want to set a special API-URL, just set an environment variable and rebuild ...

    export apiUlr="https://ccc.mi24.dev"
    npm run build


just check the codestyle with jscs or jshint

    npm run jscs   
    npm run lint   


to set new version in package.json and tag the branch use the following command or(and) read this: 
[npm package version](https://www.npmjs.com/package/versiony#readme)

    npm version patch


to run only the karma test use

    npm run test:karma


To start the local web server ...

    npm run start

This web server will be reachable at [localhost:3000](http://localhost:3000)