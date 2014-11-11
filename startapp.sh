#!/usr/bin/env bash

echo "***************** gunicorn *********************"
gunicorn app:app -b 0.0.0.0:5000

