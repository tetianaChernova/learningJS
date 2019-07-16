function factorial(number){
    if(number === 0 || number=== 1) return 1;
    else return number * factorial(number - 1);
}


function main() {
    const n = 5;
    console.log(factorial(n));
}

main();