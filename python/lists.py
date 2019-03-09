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