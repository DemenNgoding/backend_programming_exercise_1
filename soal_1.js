function Prima(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 1;
    }
    return true;
}

console.log("Bilangan prima dari 1 hingga 1000:");
for (let i = 0; i <= 1000; i++) {
    if (Prima(i)) {
        console.log(i + " ");
    }
}