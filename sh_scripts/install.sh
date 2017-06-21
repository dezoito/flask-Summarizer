#!/usr/bin/env bash
# Must run in  /app (guest server)

echo "***********************************************"
echo "***************** install *********************"
echo "***********************************************"



echo "***********************************************"
echo "---apt update e upgrade---"
echo "***********************************************"
sudo apt-get -y update

echo "***********************************************"
echo "--- python/Flask Stuff  (notice version 3) ---"
echo "***********************************************"
sudo apt-get -y install python3-pip
# curl -O https://raw.githubusercontent.com/pypa/pip/master/contrib/get-pip.py # for ubuntu 12
# sudo python3.2 get-pip.py  # for ubuntu 12
sudo apt-get -y install python3-dev python3-setuptools
sudo apt-get -y install git
sudo apt-get -y install supervisor

echo "***********************************************"
echo " Main install script finished                  "
echo "***********************************************"


