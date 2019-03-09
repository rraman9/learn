def concat(listOfStrings):
    "Concatenate a list of strings to a single one"
    s = ""
    for string in listOfStrings:
        s = s + string
    return s

print(concat(["one","two","three"]))

def isWordInString(string, word):
    "Finds out if a given word is in the string"
    return word in string

print(isWordInString("This is a lazy dog", "lazy"))

def isNumberPrime(num):
    "Define if number is prime"
    print("Checking if number ", num, " is prime in range:", range(1,num-1))
    isPrime = True
    for divisor in range(2,num-1):
        if num % divisor == 0:
            isPrime = False
            break
    print("Prime:", isPrime)
    return isPrime

print(isNumberPrime(15))
print(isNumberPrime(3))

def average(*args):
    return sum(args) / len(args)

print(average(1,2,3,4,5))

def findSubject(**kwargs):
    if 'subject' in kwargs:
        print('subject is:', kwargs['subject'])
    else:
        print('there is no subject!')

findSubject(day='sunday',subject='medicine')
findSubject(day='sunday',year='2019')

def capitalizealternateletters(str):
    count = 0
    returnstr = ""
    for letter in str:
        if count%2 == 0:
            returnstr = returnstr + letter.upper()
        else:
            returnstr = returnstr + letter.lower()
        count = count+1
    return returnstr

print(capitalizealternateletters('raja is a great developer'))