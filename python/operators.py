for num in range(8,15):
    print(num)
evenNumberList = list(range(0,11,2))
print(evenNumberList)
word = 'abcde'
index = 0
for letter in word:
    print('At index: {} letter is {}'.format(index, letter))
    index += 1

for index,letter in enumerate(word):
    print('At index: {} letter is {}'.format(index, letter))

list1 = [1,2,3]
list2 = ['a','b','c']
for item in zip(list1, list2):
    print(item)

# Boolean returns for in operator
print('a' in 'a world')
print('key' in {'key':12345})
list = [10,23,55,15,2]
print(min(list))
from random import shuffle
mylist = [1,2,3,4,5,6]
shuffle(mylist)
print(mylist)

from random import randint
for i in range(1,10):
    print(randint(1,50))

print(type(3))
print(type(str(3)))
print(type(float(3)))