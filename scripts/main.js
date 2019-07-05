var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/rabbithole.jpg') {
        myImage.setAttribute('src', 'images/rabbithole2.jpg');
    } else{
        myImage.setAttribute('src', 'images/rabbithole.jpg');
    }
}

/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
alert('hello');
var iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}
function multiply(num1, num2){
    var result = num1 * num2;
    return result;
}
console.log(multiply(4, 7));
console.log(multiply(20, 20));
console.log(multiply(0.5, 3));

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName =prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Rabbit hole awaits you, '+ myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Rabbit hole awaits you, '+ storedName;
}
myButton.onclick = function() {
    setUserName();
}