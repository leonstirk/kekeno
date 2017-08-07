#!/bin/bash

read -p "Dyno name: "

heroku create $REPLY

# heroku buildpacks:set https://github.com/jordansissel/heroku-buildpack-meteor.git -a $REPLY
heroku buildpacks:set https://github.com/AdmitHub/meteor-buildpack-horse.git

heroku addons:create mongolab -a $REPLY
# heroku addons:create mongolab:shared-cluster-1 -a $REPLY
# heroku addons:create mongohq:ssd_1g_elastic -a $REPLY

heroku config:set ROOT_URL=https://$REPLY.herokuapp.com/ -a $REPLY

# heroku config:add METEOR_SETTINGS="$(cat settings.json)" -a $REPLY

git push heroku master
