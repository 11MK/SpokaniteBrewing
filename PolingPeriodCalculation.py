def function(value): 
    npwl = float(value)
    p1 = (1.9926 * npwl) - 456.54
    p2 = (1.8456 * npwl) - 297.82
    a1 = 28.49 + 0.0173*(1970 - p1)
    a2 = 28.49 + 0.0173*(1970 - p2)
    print("Poling Period:\n" + str(a1) + "\n" + str(a2))
    

def main():
    value = input("Enter NPWL: ")
    function(value)


main()