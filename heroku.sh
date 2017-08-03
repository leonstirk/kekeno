#!/bin/bash

heroku create kekeno-stage

# heroku buildpacks:set https://github.com/jordansissel/heroku-buildpack-meteor.git -a kekeno-stage
heroku buildpacks:set https://github.com/AdmitHub/meteor-buildpack-horse.git

heroku addons:create mongolab -a kekeno-stage
# heroku addons:create mongolab:shared-cluster-1 -a kekeno-stage
# heroku addons:create mongohq:ssd_1g_elastic -a kekeno-stage

heroku config:set ROOT_URL=https://kekeno-stage.herokuapp.com/ -a kekeno-stage

# heroku config:add METEOR_SETTINGS="$(cat settings.json)" -a kekeno-stage

git push heroku master
