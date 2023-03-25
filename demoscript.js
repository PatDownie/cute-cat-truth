let user = prompt("TYPE YOUR NAME");

alert("hello " + user + " :)");

let favCat = prompt(user + ", what is your favourite type of cat?");

let personalGreeting;

if (favCat == "none") {
  personalGreeting = "Good answer" + user;
}
else {
  personalGreeting = user + " you are wrong, " + favCat + "s are evil.";
}

document.getElementById("personal-greeting").innerHTML = personalGreeting;

console.log(favCat);

console.log(personalGreeting);