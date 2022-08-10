function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

     //rock paper scissors
     if (input == "Welcome To CUTM!") {
        return "I am a CUTM Asistent,how can i asist you";
    } else if (input == "I love CUTM!") {
        return "Love you too!";
    } else if (input == "how many clubs in your campus") {
        return "our campus having so many clubes and activity,CSR clube,NCC Clube,dance clube,gaming clube, or etc"
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else
        return "i donot understand,say again";
    }
