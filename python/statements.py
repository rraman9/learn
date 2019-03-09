a='hello'
b='world'
if a=='hello' and b=='world':
    print('helloworld')
else:
    print('not true!')

if (len(a)==10):
    print('length of ', a, ' is 10')
elif (len(a)>5):
    print('length of ', a, ' is >5')
else:
    print('length of ', a, ' is:', len(a))

my_iterable = [1,2,3,4,5,6]
for i in my_iterable:
    print('element:', i)

print('for list:', my_iterable, ' - even numbers are:')
for num in my_iterable:
    if num % 2 == 0:
        print(num)

print('for list:', my_iterable, ' - sum is:')
sum = 0
for num in my_iterable:
    sum = sum + num
print(sum)

helloworld = 'Hello world'
for letter in helloworld:
    print('letter:', letter)

tuple = (1,2,3)
print('printing tuple elements for tuple:', tuple)
for t in tuple:
    print(t)

tupleInList = [(1,2),(3,4),(5,6)]
print('first printing list elements:')
for tuples in tupleInList:
    print(tuples)

print('now printing individual elements in tuple from list')
for (a,b) in tupleInList:
    print('a=', a, ', b=', b)

print('printing dictionary items')
d = {'key1': 'value1', 'key2':3, 'key3': 3.5};
for key,value in d.items():
    print('key is:', key, ' and value is:', value)

x = 0
while x<5:
    print(x)
    x=x+1
    pass # this is just a blank statement - does nothing!

for letter in 'helloworld1324s':
    if letter=='o':
        continue;
    if letter=='d':
        break;
    print(letter)


# Create a list of 1-10
print('creating list:')
num=2
list = [0,1]
while (num<10):
    list.append(num)
    num = num+1
print ('list:', list)

# Now create list using range
print('alternate in numbers between 1 and 11:')
for num in range(1,11,2):
    print(num)

index_count = 0
for letter in 'abcde':
    print('element ', index_count, ' is:', letter)
    index_count = index_count+1

# now use enumerate
for item in enumerate('abcde'):
    print(item)

mylist1 = [1,2,3]
mylist2 = ['a','b','c']
print('zipping values')
for item in zip(mylist1, mylist2):
    print(item)

print('is 2 in list:',  mylist1, "? Answer is:", 2 in mylist1)
print('minimum:', min(mylist1))
from random import shuffle
print('shuffling list:', mylist2, ' shuffled result:')
shuffle(mylist2)
print(mylist2)
#num = input('enter a number:')
#print('you entered:', int(num))
mylist = [x for x in 'hello']
print(mylist)

# Squares of all even numbers from 1-100
print('Squares of all even numbers from 1-100', [x**2 for x in range(1,100) if x%2==0])
