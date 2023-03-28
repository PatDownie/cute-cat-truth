let user;

function yourName() {
  user = prompt("TYPE YOUR NAME");

  alert("hello " + user + " :)");

  console.log(user);
  return user;
}

function favCatQuestion() {
  let personalGreeting = "";
  while (personalGreeting === "") {
    let favCat = prompt(
      user + ", what is your favourite classic cat colour? Black or orange?"
    );
    if (
      favCat === "none" ||
      favCat === "neither" ||
      favCat === "None" ||
      favCat === "Neither"
    ) {
      personalGreeting = "Good answer " + user;
    } else if (
      favCat === "Black" ||
      favCat === "black" ||
      favCat === "Orange" ||
      favCat === "orange"
    ) {
      personalGreeting =
        "I must warn you, " + user + ", " + favCat + " cats are evil!";
    } else {
      alert(user + " you idiot, follow the instructions");
    }
  }
  console.log(personalGreeting);
  document.write(personalGreeting);
}
function rating() {
  let output = "";
  let rating = prompt("How evil are cats? (1-5)");
  for (let i = 0; i < rating; i++) {
    output +=
      "<img class='angrycat' src='images/angry-cat.png' alt='angry cat'>";
  }
  return (document.getElementById("angry-cat-rating").innerHTML = output);
}

let buttonState = 0;
let buttonCounter = 0;
function minecraft() {
  if (buttonState == 0 && buttonCounter <= 4) {
    document.body.style.backgroundImage =
      "url('https://i.pinimg.com/originals/2a/b1/c3/2ab1c37cfdff720c6de2ddb07328f145.jpg')";
    // document.getElementById("minecraft-header").style.backgroundColor = "green";
    document.getElementById("minecraft-button").innerHTML =
      "I don't like Minecraft actually";
    buttonState = 1;
    buttonCounter += 1;
    console.log(buttonState);
    console.log(buttonCounter);
  } else if (buttonState == 1 && buttonCounter <= 4) {
    document.body.style.backgroundImage = "none";
    document.getElementById("minecraft-button").innerHTML = "I like Minecraft";
    buttonState = 0;
    buttonCounter += 1;
    console.log(buttonState);
    console.log(buttonCounter);
  } else {
    document.getElementById("minecraft-button").innerHTML =
      "You broke the button by clicking it too much, these HTML elements don't last forever you know";
  }
}
