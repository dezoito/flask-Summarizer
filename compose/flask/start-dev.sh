#!/bin/sh
echo "**************** start-dev.sh *****************"
# sudo cp -R /root/nltk_data /usr/share/nltk_data

cd /app
# runs app using gunicorn (best for production environment)
# gunicorn app:app -b 0.0.0.0:5000
python3 run.py # runs app using flask server (better for dev)



