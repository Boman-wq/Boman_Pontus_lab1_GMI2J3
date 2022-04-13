from leapyear import to_leap_year
import time
import sys

class Spinner():
    spinners = ("|", "/", "-", "\\")
    
if __name__ == '__main__':
    print("Välkommen till skottårsanalys")
    print("Här kan man testa ett årtal och se ifall det är ett skottår")
    user_input=input("Skriv in ett årtal: ")
    for i in Spinner.spinners*2:
        sys.stdout.write(f"\r {i}")
        sys.stdout.flush()
        time.sleep(0.1)
    print()
    print(to_leap_year(user_input))

    