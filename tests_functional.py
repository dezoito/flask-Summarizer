# -*- coding: utf-8 -*-
#!flask/bin/python

# See: http://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-vii-unit-testing
# AND
# https://pythonhosted.org/Flask-Testing/
# BTW, Tests have to run under vagrant environment!
import os
import unittest
import tempfile
import urllib # cant use urllib2 in python3 :P
import config, sample_strings
from flask import Flask
from flask.ext.testing import TestCase
from app import app
from app.views import make_summary
# from textrank import textrank
# from summarize import summarize


class StartingTestCase(TestCase):

    def setUp(self):
        pass

    def create_app(self):
        """
        This is a requirement for Flask-Testing
        """
        app = Flask(__name__)
        app.config['TESTING'] = True
        self.baseURL = "http://localhost:5000"
        self.client = app.test_client()
        return app

    # hardcoded for now...does not use the liveServer
    def test_real_server_is_up_and_running(self):
        response = urllib.request.urlopen(self.baseURL)
        self.assertEqual(response.code, 200)
        # returned source code is stored in
        # response.read()


    # --------------------------------------------------------------------------
    # Testing Views
    # --------------------------------------------------------------------------
    def test_view_form_resumo_get(self):
        rv = self.client.get('/')
        print(rv.data)
        assert 'No entries here so far' in str(rv.data)



    def tearDown(self):
        pass

if __name__ == '__main__':
    unittest.main()
