function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    return /^([aeiou]).*\1$/;
}

function main() {
    const re = regexVar();
    const s = 'absga';

    console.log(re.test(s));
}