# -*- coding: utf-8 -*-
#!flask/bin/python

# See:
# http://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-vii-unit-testing
# https://pythonhosted.org/Flask-Testing/
# http://flask.pocoo.org/docs/0.10/testing/#testing
# http://engineering.aweber.com/getting-started-with-ui-automated-tests-using-selenium-python/
# https://selenium-python.readthedocs.org/

import unittest
import sys
import time
sys.path.append('..')
import config
import sample_strings
from flask import Flask
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from app import app
from utils import print_test_time_elapsed


class StartingTestCase(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.PhantomJS()
        self.baseURL = "http://localhost:5000/"

    def tearDown(self):
        self.driver.quit

    # --------------------------------------------------------------------------
    # Simple tests to make sure server is UP
    # (does NOT use LiveServer)
    # --------------------------------------------------------------------------
    @print_test_time_elapsed
    def test_home(self):
        self.driver.get(self.baseURL)
        assert "Summarizer App" == self.driver.title

    @print_test_time_elapsed
    def test_home_envio_form(self):
        self.driver.get(self.baseURL)
        self.driver.find_element_by_id("texto").send_keys("Resuma isso!")
        self.driver.find_element_by_id("btnSubmit").click()
        resumo = self.driver.find_element_by_id("txt_resumo").text
        assert "Resuma isso!" in resumo

    @print_test_time_elapsed
    def test_sample_text(self):
        self.driver.get(self.baseURL)
        self.driver.find_element_by_link_text("Sample 1").click()
        # WebDriverWait(self.driver, 3).until(
        #     EC.text_to_be_present_in_element((By.ID, "texto"), "a"))
        self.driver.find_element_by_id("btnSubmit").click()
        self.assertIn("Um suéter azul.",
                self.driver.find_element_by_id("txt_resumo").text)


if __name__ == '__main__':
    unittest.main()
