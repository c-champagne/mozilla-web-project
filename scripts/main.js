let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute( 'src');
    if(mySrc === 'images/dvdcover.jpg') {
        myImage.setAttribute ('src','images/dvdcover20th.jpg');
    } else {
        myImage.setAttribute ('src','images/dvdcover.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName || myName === null) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Princess Bride is the best, ' + myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Princess Bride is the best, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}