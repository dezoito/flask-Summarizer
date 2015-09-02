#!/usr/bin/env bash

# This script should only be used in a DEVF environment
# (Where flasks default server makes things simpler)
# or in case supervisor is not working for some reason.

echo "***************** running startapp  *********************"
cd /vagrant
# runs app using gunicorn (best for production environment)
# gunicorn app:app -b 0.0.0.0:5000
python3 run.py # runs app using flask server (better for dev)

