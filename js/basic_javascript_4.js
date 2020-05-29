function my_Dictionary()    {
    var Animal = {
    Species:"Lynx",
    Color:"Black",
    Breed:"Feline",
    Age:4,
    Sound:"Hiss!",
};
delete Animal.Sound;
document.getElementById("Dictionary").innerHTML = Animal.Sound;
}