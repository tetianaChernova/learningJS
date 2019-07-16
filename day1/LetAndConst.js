// In this challenge, we practice declaring variables using the let and const keywords.
function main() {
    const PI = Math.PI;
    let radius = readLine();

    console.log(PI * radius * radius);
    console.log(2 * PI * radius);
    try {
        // Attempt to redefine the value of constant variable PI
        // PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

main();