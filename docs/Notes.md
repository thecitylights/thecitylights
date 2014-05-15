# Github

Create new repository
Add remote origin to local git repo
Push


# Heroku

Install `heroku` and `foreman` CLI commands


Declare process types in `Procfile`
Note: only `web` process receives HTTP traffic

    web: node server/index.js

Create app

    heroku create [name]

Deploy code

    git push heroku master

Launch `web` process with 1 dyno

    heroku ps:scale web=1

View logs

    heroku logs

Visit app

    heroku open

Kill `web` process

    heroku ps:scale web=0


# Travis CI
(http://docs.travis-ci.com/user/getting-started/)

Install `travis` CLI command

    sudo gem install travis

Turn repository 'on' in the Travis web ui
Create .travis.yml

    language: node_js

## Configure Heroku deployment
(http://docs.travis-ci.com/user/deployment/heroku/)

Run automated setup tool

    travis setup heroku

Trigger build
Push repo to github

Add build image to README.md
Click on image.
Copy Markdown link to README.md
Push