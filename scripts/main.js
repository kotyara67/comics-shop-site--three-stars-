var myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";


var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc == "images/cat.jpg") {
    myImage.setAttribute("src", "images/cat2.jpg");
  }
  else {
    myImage.setAttribute("src", "images/cat.jpg");
  }
};

var myButton = document.querySelector("button");

function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Здравствуйте, " + myName;
  }

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Здравствуйте, " + storedName;
  }

  myButton.onclick = function () {
    setUserName();
  };