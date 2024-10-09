let sum = 0;

do {
    sum = parseInt(prompt(`pick a number from 1 to 100`, 100));

}

while (isNaN(sum) || sum < 1 || sum > 100);

for (i = sum; i >= 0; i--) {

    document.write(i + ` `)
}