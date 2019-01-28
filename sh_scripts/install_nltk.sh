#!/usr/bin/env bash


echo "***********************************************"
echo "--- setting up NLTK for summarize ---"
echo "***********************************************"
# Note, the NLTK packages are download to /root, but must be moved to a shared
# folder like /usr/share/nltk_data
# Also, we have to wait until nltk_setup.py is done downloading everything it
# needs (it takes a while)
python3 nltk_setup.py &
wait %1

# copy downloaded language files to shared directory
mv /root/nltk_data /usr/share/nltk_data

echo "***********************************************"
echo "--- End of NLTK setup ---"
echo "***********************************************"



