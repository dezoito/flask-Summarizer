#!/bin/sh
echo "***********************************************"
echo "--- GUNICORN.SH                             ---"
echo "***********************************************"
# /usr/local/bin/gunicorn config.wsgi -w 4 -b 0.0.0.0:5000 --chdir=/app
cd /app
gunicorn app:app -b 0.0.0.0:81 --chdir=/app
