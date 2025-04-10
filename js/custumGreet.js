// write a function that check the clock and greet the user;
let Greet = document.getElementById("displayGreet");
let welcome = "Hello";

function greet() {
  const date = new Date();
  let Hours = date.getHours();
  //   let minutes = date.getMinutes();
  //   let seconds = date.getSeconds();
  //   console.log("Hours: " + Hours, "minutes: " + minutes, "seconds: " + seconds);

  if (Hours >= 0 && Hours < 12) {
    Greet.innerHTML = `${welcome}, Good Morning`;
  } else if (Hours >= 12 && Hours < 16) {
    Greet.innerHTML = `${welcome}, Good Afternoon `;
  } else if (Hours >= 16 && Hours < 24) {
    Greet.innerHTML = `${welcome}, Good Evening`;
  }
}
greet();
