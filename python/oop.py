class Dog():
    species = 'mammal'
    def __init__(self, breed):
        self.breed = breed
    def bark(self, number):
        i = 0
        while (i<number):
            print("WOOF ")
            i = i + 1
dog = Dog(breed='Doberman')
print('breed is:' + dog.breed + ' from species:' + dog.species)
dog.bark(5)