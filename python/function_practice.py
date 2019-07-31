def is_even(num):
    return num%2==0

def smaller(num1, num2):
    if (num1<num2):
        return num1;
    else:
        return num2;

def larger(num1, num2):
    if (num1<num2):
        return num2;
    else:
        return num1;

def lesser_of_two_evens(num1, num2):
    if is_even(num1) and is_even(num2):
        return smaller(num1, num2);
    else:
        return larger(num1, num2);

def do_words_begin_with_same_letter(sentence):
    words = sentence.split(' ');
    if (words[0][0]==words[1][0]):
        print("starting with same letter");
    else:
        print("starting with different letter");

print(is_even(2));
print(is_even(5));
print(smaller(2,8));
print(larger(2,8));
print (lesser_of_two_evens(2,4));
print (lesser_of_two_evens(5,9));
do_words_begin_with_same_letter("Test StTease");