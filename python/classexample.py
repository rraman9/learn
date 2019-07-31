class Animal():
    def __init__(self):
        print("Animal created")
    def eat(self):
        print("Eating")

class Dog(Animal):
    def __init__(self, breed):
        Animal.__init__(self)
        self.breed = breed
    def bark(self):
        print("WOOF")

my_dog = Dog(breed='Lab')
print('Breed is', my_dog.breed)
my_dog.bark()
my_dog.eat()