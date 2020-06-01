var X = 10;
function Add_numbers_1()    {
    document.write(20 + X + "<br>");
}
function Add_numbers_2()    {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function get_Date() {
    if (new Date().getHours() < 18)  {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").nodeValue;
    if (Age >= 21)  {
        Drink = "You are old enough to drink!";
    }
    else    {
        Drink = "You are not old enough to drink!";
    }
    document.getElementById("whats_your_Age?").innerHTML = Drink;
}

function Time_function()    {
    var Time = new Date().getHours();
    if (Time < 12 == Time > 0)  {
        Reply = "IT is morning time!";
    }
    else if (Time > 12 == Time < 18)   {
        Reply = "it is afternoon.";
    }
    else {
        Reply = "it is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}