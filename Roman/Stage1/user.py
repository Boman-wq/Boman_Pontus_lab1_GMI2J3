from roman import to_roman, from_roman

# user_input = input("Skriv in:")
# to_roman(user_input)

def Menu():
    print("1) To Roman")
    print("2) From Roman")
    print("3) Avsluta")


while True:
    Menu()
    user_input = 0
    user_menu = input("Välj ett menuval:\n")
    if user_menu == "1":
        user_input_to_roman = input("Skriv in ett tal som du vill konvertera till Romerska siffror:\n")
        print(to_roman(user_input_to_roman))
        input("Enter för att komma tillbaka till meny:")
    elif user_menu == "2":
        user_input_from_roman = input("Skriv in ett Romerskt tal för att konvertera det till siffror:\n")
        print(from_roman(user_input_from_roman))
        input("Enter för att komma tillbaka till meny:")
    elif user_menu == "3":
        break
