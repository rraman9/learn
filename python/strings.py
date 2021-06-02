s = "hello"
print(s.capitalize())
print(s[0])
print(s[2:])
print(s[2:3])
print(type(4+3*1.2))

# split sentence and print only the words that start with s
s = "Print only words that start with s in this sentence"
wordsStartingWithS = [word for word in s.split() if word.startswith('s')]
print(wordsStartingWithS)