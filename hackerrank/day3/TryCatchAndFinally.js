/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
        let revString = "";
        s.split("").forEach(char => revString = char + revString);
        console.log(revString);
    }
    catch(e){
        console.log("s.split is not a function");
        console.log(s);
    }
}


function main() {
    const s = "hello";
    reverseString(s);
}

main();