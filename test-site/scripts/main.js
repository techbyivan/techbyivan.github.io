// Img Query Selector
let myImage = document.querySelector("img");
myImage.onclick = () => {
	let mySrc = myImage.getAttribute("src");
	if (mySrc === "test-site/images/firefox-logo.png") {
		myImage.setAttribute("src", "test-site/images/github-logo.png");
	} else {
		myImage.setAttribute("src", "test-site/images/firefox-logo.png");
	}
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
	let myName = prompt("Please enter your name.");
	if (!myName || myName === null) {
		setUserName();
	} else {
		localStorage.setItem("name", myName);
		myHeading.innerHTML = "Mozilla is cool, " + myName;
	}
}

if (!localStorage.getItem("name")) {
	setUserName();
} else {
	let storedName = localStorage.getItem("name");
	myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
	setUserName();
};
