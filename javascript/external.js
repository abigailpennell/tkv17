// External JavaScript for Lab 4
// Abigail Etzler-Pennell

// ----------------------------
// Lab 3 work (kept for reference, commented out)
// ----------------------------

// Task 1 - Embed JS
/*
document.write("Where is my JS code?");
*/

// Task 2 - Output
/*
window.alert(5 + 6);
window.alert('5 + 6');
document.write('<h1>A heading</h1>');
document.write('<p>A sentence.</p>');
*/

// Task 3 - Variables (OLD VERSION - replaced by welcome() function below)
/*
user_name = window.prompt("Please enter your name", "Type your name here");
document.write(user_name);
*/

// Task 4 - Operators
/*
a = 22;
const b = 33;
document.writeln(a + b);
document.writeln("<br>");
document.writeln(a += b);
document.writeln("<br>");
document.writeln(a += b);
*/

// Task 5 - Conditional Statement
/*
document.writeln("<button onclick='condition()'>Conditional Test</button>");
function condition() {
    x = confirm("Are you sure you want to proceed?");
    if(x) {
        document.writeln("You chose Okay!");
    } else {
        document.writeln("You chose Cancel!");
    }
}
*/

// Task 6 - Array
/*
arr = ["Mael","Eric","Randall","James"];
for (var i=0; i < arr.length; i++) {
    document.writeln(arr[i], "<br>");
}
*/

// ----------------------------
// Lab 4 Additions
// ----------------------------

// Task 1 & 2: Welcome Function
function welcome() {
    let a = "Please enter your name.";
    let b = "Type your name here.";
    let user_name = window.prompt(a, b);

    let message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>";
    return message;
}

document.write(welcome());

// ----------------------------
// Task 4: Arrays + Table with Conditional Formatting
// ----------------------------

// Multi-dimensional array of webmaps [Name, Link, Review]
var webmaps = [
  [
    "Texas Ecosystems Analytical Mapper (TEAM)",
    "https://tpwd.texas.gov/gis/team/",
    "The TEAM webmap, created by Texas Parks and Wildlife, provides detailed data on Texas ecosystems and vegetation types. It is a valuable tool for conservation research, allowing users to analyze landscape patterns at multiple scales. I found it straightforward to navigate and helpful for understanding land cover across the state."
  ],
  [
    "National Wetlands Inventory Mapper",
    "https://www.fws.gov/program/national-wetlands-inventory/wetlands-mapper",
    "The U.S. Fish and Wildlife Service’s Wetlands Mapper displays the location and type of wetlands across the country. It is especially useful for understanding habitat distribution, water resources, and conservation priorities. While it can take time to load large datasets, the map provides essential information for wildlife and ecosystem management."
  ],
  [
    "EPA EnviroAtlas",
    "https://enviroatlas.epa.gov/enviroatlas/interactivemap/",
    "The EPA EnviroAtlas webmap integrates environmental and demographic data to highlight the importance of ecosystem services. It covers topics like water quality, air quality, and green infrastructure, making it a versatile tool for both scientists and policymakers. I found it to be a strong example of how mapping can connect ecological data with human well-being."
  ]
];

// Function to build a table from the webmaps array with alternating row colors
function webmap_table() {
    document.write("<table width=100% border='1' style='border-collapse:collapse;'>");

    for (var row = 0; row < webmaps.length; row++) {
        // Alternate row background color
        if (row % 2 == 0) {
            document.write("<tr style='background-color:#f2f2f2;'>"); // light gray
        } else {
            document.write("<tr style='background-color:#ffffff;'>"); // white
        }

        for (var column = 0; column < webmaps[0].length; column++) {
            // Make the second column clickable links
            if (column === 1) {
                document.write("<td><a href='" + webmaps[row][column] + "' target='_blank'>" + webmaps[row][column] + "</a></td>");
            } else {
                document.write("<td>" + webmaps[row][column] + "</td>");
            }
        }

        document.write("</tr>");
    }

    document.write("</table>");
    return "";
}
