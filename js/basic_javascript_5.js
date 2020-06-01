document.write(typeof "Word");
document.write(typeof 3);

document.write(3E310);
document.write(-3E310);
document.getElementById("Test").innerHTML = isNaN('This is a string');

function my_Function()  {
    document.getElementById("Test").innerHTML = 0/0;
}

document.write(15>57);
document.write(89<107);

document.write("10"+5);

document.write(40==40);
document.write(43==78);

X = 10
Y = 10
document.write(X===Y);

Z = 10
F = 11
document.write(Z===F);

K = "10"
L = 8
document.write(L===K);

M = 8
J = "8"
document.write(M===J);


document.write(4 > 1 && 17 > 8);
document.write(6 < 3 || 9 < 11);

function not_Function() {
    document.getElementById("Not").innerHTML = !(30 > 15);
}