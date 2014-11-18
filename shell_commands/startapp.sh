#!/usr/bin/env bash

echo "***************** running startapp (gunicorn) *********************"
cd /vagrant
# gunicorn app:app -b 0.0.0.0:5000
python3 run.py

