#!/usr/bin/env bash


echo "***********************************************"
echo "--- setting up NLTK for summarize ---"
echo "***********************************************"
# Note, the NLTK packages must have already been downloaded to
# the GUEST folder: "/home/app/nltk_data/"
# I initially used "all-corpora"
# NOTICE: This is not reliable is the script sometimes stop without downloading
# all the language packages
# Also, we try to wait until nltk_setup.py is done downloading everything it
# needs (it takes a while)
python3 nltk_setup.py &
wait %1

# copy downloaded language files to "vagrant" user directory
# (IF They were downloaded to /root if you used sudo for the command above :( )
sudo cp -R /root/nltk_data /usr/share/nltk_data

echo "***********************************************"
echo "--- End of NLTK setup ---"
echo "***********************************************"



