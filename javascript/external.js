// username prompt
const user_name = window.prompt("Please enter your name", "Type your name here");
document.getElementById("user-header").innerHTML = "Hello, welcome " + user_name + "!";

// Output examples
window.alert(5 + 6);             // Alert with calculation
window.alert('5 + 6');           // Alert with string
document.write('<h1>A heading</h1>');
document.write('<p>A sentence.</p>');

// Variables
const x = "web";
const y = "mapping";
const out = x + y;
document.write("<p>" + out + "</p>");

// Operators
let a = 22;
const b = 33;
document.writeln(a + b);
document.writeln("<br>");
document.writeln(a += b);
document.writeln("<br>");
document.writeln(a += b);

// Conditional Statement
document.writeln("<button onclick='condition()'>Conditional Test</button>");
function condition() {
  const x = confirm("Are you sure you want to proceed?");
  if(x) {
    document.writeln("You chose Okay!");
  } else {
    document.writeln("You chose Cancel!");
  }
}

// Array
const arr = ["Mael","Eric","Randall","James"];
for (let i = 0; i < arr.length; i++) {
  document.writeln(arr[i], "<br>");
}

// Homework Task?: Copyright Footer
const today = new Date();
const year = today.getFullYear();
document.getElementById("copyright").innerHTML =
  "Copyright &copy; " + year;

// Task 1: Example external JS test (Optional?)
document.write("<p>Where is my JS code?</p>");
