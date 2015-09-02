#!/usr/bin/env python3

# downloads the nltk corpora packages
# so that we can setup the summarize packages

import nltk, sys
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('all-corpora')

sys.stdout.write("-------------\n")
sys.stdout.write("nltk_setup.py executed successfully\n")
sys.stdout.write("-------------\n")

