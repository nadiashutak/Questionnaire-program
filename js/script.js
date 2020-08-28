var firstName = prompt("Як вас звати?");

var age = prompt("Скільки вам років?");

var work = prompt("Ким ви працюєте?");

var favouriteColor = prompt("Ваш улюблений колір?");

var favouriteAuthor = prompt("Ваш улюблений автор?");

var sayHi = "Привіт, "

var vote;

if (firstName == null || firstName == " ") {
  sayHi = sayHi + "Невідомий. Введіть своє ім\'я ще раз, будь ласка.";
} else {
  sayHi = sayHi + firstName;
}


if (age >= 18) {
  vote = "вже дозволено";
} else {
  vote = "ще не дозволено";
}


document.getElementById("TextAboutUser").innerHTML = sayHi  +
 "<br/> Я бачу вам " + age + " років. <br/>" +
 "Як я бачу вам " + vote + " голосувати. <br/>" + 
 "Ви працюєте " + work + ". <br/>" +
 "Я теж люблю цей " + favouriteColor + " колір. <br/>" +
 favouriteAuthor + " теж один з моїх улюблених авторів. <br/>";
 
 
document.getElementById("Congratulations").innerHTML = "Ми раді з Вами познайомитися."; 