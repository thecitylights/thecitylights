# GitHub

Create new repository
Add remote origin to local git repo
Push



# NPM
Create `/package.json` file by running this command in the root directory of the project.

    npm init


# Gulp
Create `/client/gulpfile.js`



# RequireJS



# LESS



# Heroku
(https://devcenter.heroku.com/articles/getting-started-with-nodejs)

## Install
Install `heroku` and `foreman` CLI commands

## Login to Heroku

    heroku login

## Configure processes
Create a file named `Procfile` in the root directory
Declare process types in that file.
Note: only `web` process receives HTTP traffic

    web: node server/index.js

## Create app

    heroku create [name]

## Set app environment

    heroku config:set NODE_ENV=production

## Deploy code
This is an optional command. Typically Travis-CI (set up in the next section) will do this automatically.

    git push heroku master

## Launch `web` process with 1 dyno

    heroku ps:scale web=1

## View logs

    heroku logs

## Visit app

    heroku open

## Kill `web` process

    heroku ps:scale web=0



# Travis CI
(http://docs.travis-ci.com/user/getting-started/)

Install `travis` CLI command

    sudo gem install travis

Turn repository 'on' in the Travis web ui
Create .travis.yml

    language: node_js

## Configure test and build

Add the following to `package.json`

    "scripts": {
      "build": "gulp --gulpfile=client/gulpfile.js",
      "test": "npm run build && echo \"No test specified\" && exit 0"
    }

This will build the app, run a mock test that succeeds, and then proceed to deploy the app.

## Configure Heroku deployment
(http://docs.travis-ci.com/user/deployment/heroku/)

Run automated setup tool

    travis setup heroku

Add the following to .travis.yml

    deploy:
      provider: heroku
      skip_cleanup: true
      api_key:
        master:
            secure: h5qQfZulgojvbgGFxcyJGFxtB7i3WK1bZwoCK3sx9YydtqlFRvjUr4QkrXe5Z6g5MR3A7CN1O7HjaJbqARMDgTdRTnWY4ZDdCEsBNhbRiaLSXeQmqlFWLWROk8QPtx4U9TfotdHL8JoV8bRhnN5L0GMd4lpApbL59rIgN6Hd5qg=
      app:
          master: thecitylights
      on:
        repo: thecitylights/thecitylights

Notes:

- `skip_cleanup: true`: allows files generated during build process to be included when app is deployed to heroku. Server will return a "Cannot Get/" error if this is not included since `build` directory it is trying to serve from is non-existent.

## Trigger build
Push repo to GitHub

## Add build status image to README.md
Click on image in Travis CI.
Copy Markdown link for desired branch to README.md
Push
