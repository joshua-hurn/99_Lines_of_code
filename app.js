let friends = ['Harry', 'Ron', 'Hermoine', 'Dumbledore', 'Snape'];

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i])
    for (let j = 99; j >= 1; j--) {
        if (j > 1) {
            console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file")
        } else
            console.log("1 line of code in the file, 1 line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file")
    }
}