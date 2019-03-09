with open("raja.txt", "w+") as f:
    for i in range(10):
         f.write("This is line %d\r\n" % (i+1))
with open( "raja.txt", "r") as fo:
    f.seek(0)
    print(f.read())
