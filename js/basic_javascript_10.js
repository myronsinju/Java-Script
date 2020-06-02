function count_to_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 89)  {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("counting_to_ten").innerHTML = Digit;
}

var Instruments = ["Guitar,", "Drums", "Piano", "Violin", "Bass", "Trumpet", "Flute", "Saxophone", "Claronet"];
var Content = "";
var Y;
function for_Loop()    {
    for (Y = 0; Y < Instruments.length; Y++)    {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function()   {
    var monkey_Picture = [];
    monkey_Picture[0] = "sleeping";
    monkey_Picture[1] = "playing";
    monkey_Picture[2] = "eating";
    monkey_Picture[3] = "oo oo ahh ahh";
    document.getElementById("Array").innerHTML = "in this picture, the monkey is " +
    monkey_Picture[2] + ".";
}

function constant_function()    {
    const Musical_Instrument = {type:"Guitar", brand:"Fender", color:"Black"};
    Musical_Instrument.color = "Blue";
    Musical_Instrument.price = "$900";
    document.getElementById("constant").innerHTML = "The cost of the " +
    Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

let car =   {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function()    {
        return "The car is a " + this.year + this.color + this.make +this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();