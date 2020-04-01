
let randomnum = Math.floor(Math.random() * Math.floor(100)),
    guessnum,
    ans = confirm("Are you ready?");


// $(document).ready(function () {
//     $('#btn').on('click', function () {
//         MyApp.confirm("Welcome to game guess number! Now we can start," +
//             "if you`re ready press LET`S ROLL", 'Title',
//             function () {
//                 $('.btn-no').text("I'm scared, i piss");
//                 $('.btn-yes').text("Let's roll");
//             });
//     });
// });

if (ans) {
    do {
        guessnum = +prompt("Enter your number (0-100) - ");
        console.log(guessnum);
        if(guessnum == null|| guessnum == '')
        {
            break;
        } 
        else if(Number.isNaN(guessnum)|| guessnum == 0)
        {
            alert("Please enter number value!");
        }    
        if (guessnum > randomnum) {
            alert("Enter smaller value");
        } else if(guessnum<randomnum)
        {
            alert("Enter bigger value");
        }
        else if(guessnum == randomnum)
        {
            alert("YEAHHH, YOU'R WINNN, CONGRATULATION!!!!");
        }
    } while (guessnum != randomnum);
    
} else {
    alert("Well, okay, bye");
}