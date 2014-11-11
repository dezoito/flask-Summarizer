#!/usr/bin/env bash
# Must run in  /vagrant (guest server)

echo "***********************************************"
echo "***************** install *********************"
echo "***********************************************"

echo "***********************************************"
echo "---Copiando configs para /etc/apt/apt.conf---"
echo "***********************************************"
# copia configs de proxu para o apt
# (Rodar apenas em prod)
sudo cp /vagrant/shell_commands/apt_proxy_config /etc/apt/apt.conf


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
sudo apt-get -y install git


echo "***********************************************"
echo "--- requirements ---"
echo "***********************************************"
cd /vagrant
sudo pip3 install requirements.txt


echo "***********************************************"
echo "--- setting up summarize ---"
echo "***********************************************"
# Note, the NLTK packages must have already been downloaded to
# the GUEST folder: "/home/vagrant/nltk_data/"
# I initially used "all-corpora"
python3 nltk_setup.py

cd summarize.py/summarize
sudo python3 setup.py install

echo "***********************************************"
echo "---copying configs: /etc/re.local"
echo "***********************************************"
sudo cp /vagrant/shell_commands/etc_rc.local /etc/rc.local
sudo chmod +x /etc/rc.local
source /etc/rc.local


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



