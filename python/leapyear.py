# -*- coding: utf-8 -*-
'''
There is a leap year every year whose number is perfectly divisible by four - 
except for years which are both divisible by 100 and not divisible by 400. 
The second part of the rule effects century years. 
For example; the century years 1600 and 2000 are leap years, 
but the century years 1700, 1800, and 1900 are not.
'''
class OutOfRangeError(ValueError): pass
class InvalidInputError(ValueError): pass

def to_leap_year(year):
    '''Python program to check if the input year is a leap year or not'''
    if not year:                                                ## kollar ifall year innehåller data
        raise OutOfRangeError("Input can not be blank")
    try:
        year = float(year)                                      ## kollar ifall year är en string
    except ValueError:    
        raise InvalidInputError("Input can't be a string")
    if not year % 1 == 0:                                       ## kollar ifall year är en float
        raise InvalidInputError("non-integers can not be converted")
    if not (0 < year):                                          ## kollar ifall year är större än 0
        raise OutOfRangeError("Number out of range, must be higher than 0")
    
    year = int(year)
    
    if (year % 400 == 0) and (year % 100 == 0):
        return (f"{year} is a leap year")
    elif ( year % 4 == 0) and (year % 100 != 0):
        return (f"{year} is a leap year")
    else:
        return (f"{year} is not a leap year")