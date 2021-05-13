// The syntax for this function is valid but it has an error, find it and fix it.

function trimWord(word) {
    let word = trimWord.trim(" ")
    return trimWord;
}
console.log(trimWord)

function getWordLength(word) {
    return word.length;
}
// needs to return 36.
function multiply(a, b, c) {
    total = a * b * c;
    return total;
}
console.log(multiply(3, 3, 4));
/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

To run these tests type `
    node 2 - logic - error ` into your terminal
===================================================
*/

const util = require("util");

function test(test_name, actual, expected) {
    let status;
    if (actual === expected) {
        status = "PASSED";
    } else {
        status = `
    FAILED: expected: $ {
        util.inspect(
            expected
        )
    }
    but your

    function returned: $ { util.inspect(actual) }
    `;
    }

    console.log(`
    $ { test_name }: $ { status }
    `);
}

test(
    "fixed trimWord function",
    trimWord("  CodeYourFuture "),
    "CodeYourFuture"
);
test(
    "fixed wordLength function",
    getWordLength("A wild sentence appeared!"),
    25
);
test("fixed multiply function", multiply(2, 3, 6), 36);