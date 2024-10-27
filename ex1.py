def starPalindrome(n):
    for i in range(1,n+1):
        print(" "*(n-i),"*"*(i*2-1),end="\n")

    for j in range(n-1,0,-1):
        print(" "*(n-j),"*"*(j*2-1),end="\n")

rows=int(input("enter number of rows: "))
starPalindrome(rows)