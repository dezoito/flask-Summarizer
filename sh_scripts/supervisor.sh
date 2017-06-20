#!/usr/bin/env bash


echo "***********************************************"
echo "--- setting up Supervisor ---"
echo "***********************************************"
# supervisor configs is copied in Dockerfile-dev
sudo cp /supervisor_configs /etc/supervisor/conf.d/app.conf
sudo service supervisor restart
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start app
sudo service supervisor restart
echo " "
echo "--- Supervisor Setup executed ---"
echo " "



