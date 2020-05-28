function addition_function()    {   //I'm writing mathmatic functions to help me learn
    var addition = 2 + 7;
    document.getElementById("math").innerHTML = "2 + 7 =" + addition;
}

function subtraction_function() {
    var subtraction = 10-8;
    document.getElementById("math").innerHTML = "10 - 8 =" + subtraction;
}

function multiplication()   {
    var simple_math = 8 * 4;
    document.getElementById("math").innerHTML = "8 x 4 =" + "simple_math";
}

function division()     {
    var simple_math = 72 / 9;
    document.getElementById("math").innerHTML = "72 / 9" + "simple_math";
}

function more_math()    {
    var simple_Math = (1 +4) * 10 / 2 -5;
    document.getElementById("math").innerHTML = "1 plus 4, multiplied by 10, divided in half and then subtracted by 5 equals" + simple_math;
}

function modulus_Operator() {
    var simple_math = 25 % 6;
    document.getElementById("math").innerHTML = "when you divide 25 by 6 you have a remainder of: " + simple_math;
}

function negation_Operator()    {
    var x = 10;
    document.getElementById("math").innerHTML = -x;
}

var X = 5;
X++;
document.alert(X);

var X = 5.25;
X--;
document.alert(X);

window.alert(Math.random());

window.alert(Math.random() * 100);