let user = prompt("TYPE YOUR NAME");

alert("hello " + user + " :)");

let favCat = prompt(user + ", what is your favourite type of cat?")

if (favCat = "none") {
  let personalGreeting = "Good answer" + user;
}
else {
  let personalGreeting = user + " you are wrong, " + favCat + "s are evil.";
}

console.log(personalGreeting);

document.getElementById("personal-greeting").innerHTML = personalGreeting;