#!/usr/bin/env bash
# Must run in  /vagrant (guest server)

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
sudo apt-get -y install python3-dev python3-setuptools
sudo apt-get -y install git
sudo apt-get -y install supervisor

echo "***********************************************"
echo "--- PIP requirements ---"
echo "***********************************************"
cd /vagrant
sudo pip3 install MarkupSafe
sudo pip3 install gunicorn
sudo pip3 install flask
sudo pip3 install Flask-DebugToolbar
sudo pip3 install flask-wtf
sudo pip3 install flask-babel
sudo pip3 install guess_language
sudo pip3 install flipflop
sudo pip3 install coverage
sudo pip3 install beautifulsoup4
sudo pip3 install nltk
sudo pip3 install numpy # for textrank
sudo pip3 install Networkx # for textrank


echo "***********************************************"
echo "--- setting up summarize ---"
echo "***********************************************"
# Note, the NLTK packages must have already been downloaded to
# the GUEST folder: "/home/vagrant/nltk_data/"
# I initially used "all-corpora"
# NOTICE: This is not reliable is the script sometimes stop without downloading
# all the language packages
cd /vagrant
python3 nltk_setup.py &
wait %1
echo " "
echo "--- Summarize Setup executed ---"
echo " "


echo "***********************************************"
echo "--- setting up Supervisor ---"
echo "***********************************************"
sudo cp /vagrant/shell_commands/supervisor_configs /etc/supervisor/conf.d/app.conf
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start app
sudo service supervisor restart
echo " "
echo "--- Supervisor Setup executed ---"
echo " "
echo "***********************************************"
echo " If the Summarizer App does not run on port 5000 "
echo " You might have to manually run nltk_setup.py "
echo " on the GUEST server, then restart supervisor "
echo "***********************************************"
# cd summarize.py
# sudo python3 setup.py

# echo "***********************************************"
# echo "---copying configs: /etc/re.local"
# echo "***********************************************"
# sudo cp /vagrant/shell_commands/etc_rc.local /etc/rc.local
# sudo chmod +x /etc/rc.local
# source /etc/rc.local


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



