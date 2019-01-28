# -*- coding: utf-8 -*-
#!flask/bin/python

# See: http://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-vii-unit-testing
import sys
sys.path.append('..')
from utils import print_test_time_elapsed
import textrank
import summarize
import sample_strings
import os
import unittest


class TestCase(unittest.TestCase):
    def setUp(self):
        # load sample strings
        self.small_str = sample_strings.small_text
        self.medium_str = sample_strings.medium_text
        self.large_str = sample_strings.large_text

    def tearDown(self):
        pass

    @print_test_time_elapsed
    def test_summarize_on_view_using_summarize_algo(self):
        """
        Tests summaries using the simplest algorithm
        """
        assert len(self.small_str) >= len(summarize.summarize_text(
            self.small_str, block_sep='\n').__str__())  # Single line, so > or =
        assert len(self.medium_str) > len(summarize.summarize_text(
            self.medium_str, block_sep='\n').__str__())
        assert len(self.large_str) > len(summarize.summarize_text(
            self.large_str, block_sep='\n').__str__())

    @print_test_time_elapsed
    def test_summarize_on_view_using_text_rank_algo(self):
        """
        Tests summaries using the textRank algorithm (takes longer)
        """
        assert len(self.small_str) >= len(textrank.extractSentences(
            self.small_str))  # Single line, so > or =
        assert len(self.medium_str) > len(
            textrank.extractSentences(self.medium_str))
        assert len(self.large_str) > len(
            textrank.extractSentences(self.large_str))


if __name__ == '__main__':
    unittest.main()
