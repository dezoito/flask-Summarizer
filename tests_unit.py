# -*- coding: utf-8 -*-
#!flask/bin/python

# See: http://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-vii-unit-testing
import os
import unittest

import config, sample_strings
from app import app
from app.views import make_summary
# from textrank import textrank
# from summarize import summarize

class TestCase(unittest.TestCase):
    def setUp(self):
        config.WTF_CSRF_ENABLED = False

        # load sample strings
        self.small_str  = sample_strings.small_text
        self.medium_str  = sample_strings.medium_text
        self.large_str  = sample_strings.large_text

    def tearDown(self):
        pass

    def test_summarize_on_view_using_summarize_algo(self):
        """
        Tests summaries using the simplest algorithm
        """
        assert len(self.small_str) >= len(make_summary(self.small_str)) # Single line, so > or =
        assert len(self.medium_str) > len(make_summary(self.medium_str))
        assert len(self.large_str) > len(make_summary(self.large_str))

    def test_summarize_on_view_using_text_rank_algo(self):
        """
        Tests summaries using the textRank algorithm (takes longer)
        """
        assert len(self.small_str) >= len(make_summary(self.small_str, "textrank")) # Single line, so > or =
        assert len(self.medium_str) > len(make_summary(self.medium_str, "textrank"))
        assert len(self.large_str) > len(make_summary(self.large_str, "textrank"))


if __name__ == '__main__':
    unittest.main()
