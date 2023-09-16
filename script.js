# Ask the user for input
user_input = input("Enter a number: ")

# Convert the input to an integer
try:
    number = int(user_input)

    # Check if the number is even or odd
    if number % 2 == 0:
        print("The number is even.")
    else:
        print("The number is odd.")
except ValueError:
    print("Invalid input. Please enter a valid number.")

    # Ask the user for the first number
    first_number = input("Enter the first number: ")
    
    # Ask the user for the second number
    second_number = input("Enter the second number: ")
    
    # Convert the inputs to integers
    try:
        first_number = int(first_number)
        second_number = int(second_number)
    
        # Compare the numbers and print the result
        if first_number > second_number:
            print("The first number is greater than the second number.")
        elif first_number < second_number:
            print("The second number is greater than the first number.")
        else:
            print("Both numbers are equal.")
    except ValueError:
        print("Invalid input. Please enter valid numbers.")
     
        # Ask the user for a number
user_input = input("Enter a number: ")

# Convert the input to an integer
try:
    number = int(user_input)

    # Check if the number is less than 10
    if number < 10:
        print("The number is less than 10.")
    else:
        print("The number is greater than or equal to 10.")
except ValueError:
    print("Invalid input. Please enter a valid number.")

    # Use a for loop to print numbers from 1 to 10
for number in range(1, 11):
    print(number)

    # Use a for loop to print even numbers from 1 to 10
for number in range(2, 11, 2):
    print(number)

    # Use a for loop to print odd numbers from 1 to 10
for number in range(1, 11, 2):
    print(number)
