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

Install `travis` CLI command

    sudo gem install travis -v 1.6.10 --no-rdoc --no-ri

Turn on repository

Create .travis.yml

    language: node_js

Trigger build
Push repo to github

Add build image to README.md
Click on image.
Copy Markdown link to README.md
Push
