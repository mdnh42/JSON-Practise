const data = require("./friends-data.json");
console.log(data);

// Access: 
// console.log(data.friend[0]);
// console.log(data.friend[1].age);

//Modify;
data.friend[1].name = "MD Nur Hasan";
// console.log(data.friend[1].name);


//Delete;
delete data.friend[1].name;
console.log(data);

const studentData = require("./student.json");
console.log(studentData.students[1].language[0]);
