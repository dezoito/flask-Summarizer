#!/bin/bash
echo "***********************************************"
echo "--- ENTRYPOINT                              ---"
echo "***********************************************"
sudo cp /supervisor_configs /etc/supervisor/conf.d/app.conf
# cat /etc/supervisor/conf.d/app.conf
sudo service supervisor restart
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start app
sudo service supervisor restart
cd /app
gunicorn app:app -b 0.0.0.0:81 --workers 2 --timeout 240
