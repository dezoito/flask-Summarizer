#!/usr/bin/env bash

echo "***************** running startapp (gunicorn) *********************"
cd /vagrant
gunicorn app:app -b 0.0.0.0:5000 # runs app using gunicorn (better for production)
# python3 run.py # runs app using flask server (better for dev)

