#!/usr/bin/env bash
# Must run in  /vagrant (guest server)

echo "***********************************************"
echo "***************** install *********************"
echo "***********************************************"


echo "***********************************************"
echo "---apt update e upgrade---"
echo "***********************************************"
sudo apt-get -y update
# sudo apt-get -y upgrade # Takes a while (but you need it to install pillow)!!!!

echo "***********************************************"
echo "--- python/Flask Stuff  (notice version 3) ---"
echo "***********************************************"
sudo apt-get -y install python3-pip
sudo apt-get -y install python3-dev python3-setuptools
sudo pip3 install flask
sudo pip3 install flask-login
sudo pip3 install flask-openid
sudo pip3 install flask-mail
sudo pip3 install flask-sqlalchemy
sudo pip3 install sqlalchemy-migrate
sudo pip3 install flask-whooshalchemy
sudo pip3 install flask-wtf
sudo pip3 install flask-babel
sudo pip3 install guess_language
sudo pip3 install flipflop
sudo pip3 install coverage

# echo "***********************************************"
# echo "--- firefox + selenium (for tests)          ---"
# echo "***********************************************"
# sudo add-apt-repository -y ppa:mozillateam/firefox-next
# sudo apt-get -y update
# sudo apt-get -y install firefox
# sudo pip3 install -U selenium # notice pip3
# sudo apt-get -y install xvfb

# echo "***********************************************"
# echo "--- starts firefox in headless mode         ---"
# echo "***********************************************"
# sh firefox_headless.sh



