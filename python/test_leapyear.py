# -*- coding: utf-8 -*-
'''
Unit test for leapyear.py
Student version
'''

import unittest
import leapyear
from unittest.mock import patch

class KnownValues(unittest.TestCase):
    known_values = (
        (2000, "2000 is a leap year"), 
        (1904, "1904 is a leap year"), 
        (2400, "2400 is a leap year"),
        (2020, "2020 is a leap year"),
        (2010, "2010 is not a leap year"),
        (1900, "1900 is not a leap year"),
        (1800, "1800 is not a leap year"),
        (2002, "2002 is not a leap year"))
    
    def test_to_leap_year(self):
        '''to_leap_year should give known result with known input'''
        print()
        for year, is_leap_year in self.known_values:
            results = leapyear.to_leap_year(year)
            self.assertEqual(is_leap_year,results)
            print(results)

class LeapYearBadInput(unittest.TestCase):
    def test_none_integer(self):
        '''to_leap_year should fail with non-integer input'''
        self.assertRaises(leapyear.InvalidInputError, leapyear.to_leap_year, 0.5)
    def test_zero(self):
        '''to_leap_year should fail with negative input'''
        self.assertRaises(leapyear.OutOfRangeError, leapyear.to_leap_year, 0)
    def test_blank(self):
        '''to_leap_year should fail with blank input'''
        self.assertRaises(leapyear.OutOfRangeError, leapyear.to_leap_year, "")
    def test_string(self):
        '''to_leap_year should fail with string input'''
        self.assertRaises(leapyear.InvalidInputError, leapyear.to_leap_year, "abc")


if __name__ == '__main__':
    unittest.main()
    
