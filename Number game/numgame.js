'use strict';

// Random number 0-100
let randomnum = Math.floor(Math.random() * Math.floor(100)),
    guessnum,
    ans = confirm("Are you ready?");

// A game where you should guess number, which is randomized
if (ans) {
    do {
        guessnum = +prompt("Enter your number (0-100) - ");
        console.log(guessnum);
        if (guessnum != null && guessnum != 0 && !Number.isNaN(guessnum)) {
            if (guessnum > randomnum && guessnum < 100) {
                alert("Enter smaller value");
            } else if (guessnum < randomnum && guessnum > 0) {
                alert("Enter bigger value");
            } else {
                alert("YEAHHH, YOU'R WINNN, CONGRATULATION!!!!");
            }
        } else {
            alert("Enter correct value!");
        }

    } while (guessnum != randomnum);

} else {
    alert("Well, okay, bye");
}