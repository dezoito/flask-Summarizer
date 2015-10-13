#!/usr/bin/env bash
# Must run in  /vagrant (guest server)

echo "***********************************************"
echo "***************** install *********************"
echo "***********************************************"



echo "***********************************************"
echo "---apt update e upgrade---"
echo "***********************************************"
sudo apt-get -y update
# upgrade to sudo 14.04.2 LTS
# sudo python3.2 get-pip.py

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
echo "--- PIP requirements ---"
echo "***********************************************"
cd /vagrant
sudo pip3 install MarkupSafe
sudo pip3 install gunicorn
sudo pip3 install flask
sudo pip3 install Flask-DebugToolbar
sudo pip3 install flask-wtf
sudo pip3 install flask-babel
sudo pip3 install Flask-Testing
sudo pip3 install guess_language
sudo pip3 install flipflop
sudo pip3 install coverage
sudo pip3 install beautifulsoup4
sudo pip3 install nltk
sudo pip3 install numpy # for textrank
sudo pip3 install Networkx # for textrank
sudo pip3 install -U selenium


echo "***********************************************"
echo "--- PhantomJS (for tests)          ---"
echo "***********************************************"

if [[ $EUID -ne 0 ]]; then
    echo "This script must be run as root" 1>&2
    exit 1
fi

PHANTOM_VERSION="phantomjs-1.9.8"
ARCH=$(uname -m)

if ! [ $ARCH = "x86_64" ]; then
    $ARCH="i686"
fi

PHANTOM_JS="$PHANTOM_VERSION-linux-$ARCH"

# sudo apt-get update
sudo apt-get install build-essential chrpath libssl-dev libxft-dev -y
sudo apt-get install libfreetype6 libfreetype6-dev -y
sudo apt-get install libfontconfig1 libfontconfig1-dev -y

cd ~
wget https://bitbucket.org/ariya/phantomjs/downloads/$PHANTOM_JS.tar.bz2
sudo tar xvjf $PHANTOM_JS.tar.bz2

sudo mv $PHANTOM_JS /usr/local/share
sudo ln -sf /usr/local/share/$PHANTOM_JS/bin/phantomjs /usr/local/bin
echo "--- PhantomJS Finished          ---"


echo "***********************************************"
echo "--- setting up NLTK for summarize ---"
echo "***********************************************"
# Note, the NLTK packages must have already been downloaded to
# the GUEST folder: "/home/vagrant/nltk_data/"
# I initially used "all-corpora"
# NOTICE: This is not reliable is the script sometimes stop without downloading
# all the language packages
# Also, we try to wait until nltk_setup.py is done downloading everything it
# needs (it takes a while)
cd /vagrant
python3 nltk_setup.py &
wait %1

# copy downloaded language files to "vagrant" user directory
# (They were downloaded to /root if you used sudo for the command above :( )
# sudo cp -R /root/nltk_data /home/vagrant/nltk_data

echo "***********************************************"
echo "--- End of NLTK setup ---"
echo "***********************************************"


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
echo " on the GUEST server                           "
echo "***********************************************"


