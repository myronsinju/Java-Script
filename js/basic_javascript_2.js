function second_function()    {       //defining a function
    var str = "This text is blue";    // giving a value to the string
    var result = str.fontcolor("blue"); //telling what color to call it
    document.getElementById("Blue_Text").innerHTML = result;   //showing the end result of the color by linking it to an ID
}

function myFunction()   {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("concatenate").innerHTML = sentence;
}