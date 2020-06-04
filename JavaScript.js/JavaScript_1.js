function food_Function()    {
    var Food_Output;
    var Food = document.getElementById("Food_Input").value;
    var Food_String = " is a great taste!";
    switch(Food)    {
        case "Burger":
            Food_Output = "Burger" + Food_String;
        break;
        case "Taco":
            Food_Output = "Taco" + Food_String;
        break; 
        case "Brocoli":
            Food_Output = "Brocoli" + Food_String;
        break;
        case "Tomatoe":
            Food_Output = "Tomatoe" + Food_String;
        break;
        case "Fries": 
            Food_Output = "Fries" + Food_String;
        break;
        case "Grapes":
            Food_Output = "Grapes" + Food_String;
        break;
        default:
        Food_Output = "Please enter a food item exactly written on the above list";
    }
    document.getElementById("Output").innerHTML = Food_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Verdana";
// Create gradient
var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1.0", "red");
// Fill with gradient
ctx.strokeStyle = gradient;
ctx.strokeText("Big smile!", 10, 50);


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(100, 85, 170, 15);
grd.addColorStop(0, "green");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(10, 10, 15, 100);