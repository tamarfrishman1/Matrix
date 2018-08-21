//ligts the 
function light(buttonNum) {
    let table = document.getElementById("myTable");
    for (let row of table.rows)
        for (let cube of row.cells) {
            cube.style.backgroundColor = "white";//returns the white color to all cubes one by one
            switch (buttonNum) {
                case 1:
                    if (row.rowIndex + cube.cellIndex <= table.children[0].childElementCount-1)
                        cube.style.backgroundColor = "red";
                    break;
                case 2:
                    if (row.rowIndex == cube.cellIndex || row.rowIndex + cube.cellIndex == table.children[0].childElementCount-1)
                        cube.style.backgroundColor = "red";
                    break;
                case 3:
                    if (row.rowIndex + cube.cellIndex >= table.children[0].childElementCount-1)
                        cube.style.backgroundColor = "red";
                    break;
                case 4: if (row.rowIndex ==0|| cube.cellIndex==0||row.rowIndex== table.children[0].childElementCount-1||cube.cellIndex== table.children[0].childElementCount-1)
                    cube.style.backgroundColor = "red";
            }
        }
}
//create table dynamicly:
function createTable() {

//body reference 
var body = document.getElementById("res");

// create elements <table> and a <tbody>
var tbl     = document.getElementById("myTable");
var tblBody = document.createElement("tbody");
//here you can change the size of the table
let sizeOfTable=5;
// cells creation
for (var j = 0; j <sizeOfTable; j++) {
    // table row creation
    var row = document.createElement("tr");

    for (var i = 0; i < sizeOfTable; i++) {
        // create element <td> and text node 
        //Make text node the contents of <td> element
        // put <td> at end of the table row
     var cell = document.createElement("td");    


        row.appendChild(cell);
    }

    //row added to end of table body
    tblBody.appendChild(row);
}

// append the <tbody> inside the <table>
tbl.appendChild(tblBody);
// put <table> in the <body>
body.appendChild(tbl);
// tbl border attribute to 
tbl.setAttribute("border", "2");
}
