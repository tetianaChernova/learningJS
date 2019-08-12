/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2*(a + b);
    this.area = a * b;
}


function main() {
    const a = 3;
    const b = 4;

    const rec = new Rectangle(a, b);

    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}

main();