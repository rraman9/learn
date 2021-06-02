numbers=[1,2,3]
print(numbers)
mixedList = [1,"two",3.0]
print("List: ", numbers, " has length:", len(numbers))
list = [1,2,[3,4,'hello']]
print(list)
# Replace hello with goodbye
sublist = list[2]
sublist[2] = 'goodbye'
print('updated to goodbye: list is', list)
# Sort the numbesr list
numbers = [4,3,8]
print('original numbers:', numbers)
numbers.sort()
print('sorted to:', numbers)

mystring = 'hello'
mylist = []
for char in mystring:
    mylist.append(char)

print('final list:', mylist)

newlist = [char for char in mystring]
print('new way: mylist=', newlist)

mylist = [x for x in range(10,30) if x%2==0]
print('even numbers between 10 and 30:', mylist)

celsius = [10,15,20,25,30]
fahrenheit = [((9/5)*temp+32) for temp in celsius]
print(fahrenheit)
results =  [x if x%2==0 else 'ODD' for x in range(1,50)]
print(results)

# list of all numbers between 1 and 50 divisible by 3
divisibleBy3 = [num for num in range(1,50) if num%3==0]
print(divisibleBy3)