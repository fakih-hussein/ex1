function starPalindrome(n) {
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n - i) + "*".repeat(i * 2 - 1));
    }

    for (let j = n - 1; j > 0; j--) {
        console.log(" ".repeat(n - j) + "*".repeat(j * 2 - 1));
    }
}

rows = parseInt(prompt("Enter number of rows: "));
starPalindrome(rows);
