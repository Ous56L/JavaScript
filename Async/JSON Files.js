// JSON : (JavaScript Object Notation) data-interchange format
//       Used for exchanging data between a server and a server and 
//       a web application
//       JSON files {key:value} OR [value1, value2, value3]

//       JSON.stringify() = converts a JS object to a JSON string.
//       JSON.parse() = converts a JSON string to a JS object

const jsonNames = `["Sonic","Shadow","Kuncles","Sliver","Tails"]`;
const jsonPerson = `{"name" : "Sonic",  "age" : 16 ,"isEmployed": true, "hobbies": ["Chilling","Sleeping","Racing"]}`;
const jsonPeople = `[{"name" : "Sonic","age" : 16 ,"isEmployed": true,"hobbies": ["Chilling","Sleeping","Racing"]},
                    {"name" : "Shadow","age" : 17 ,"isEmployed": false},
                    {"name" : "Silver","age" : 15 ,"isEmployed": true},
                    {"name" : "kuncles","age" : 16 ,"isEmployed": false}]`;

const parseData = JSON.parse(jsonNames);

console.log(parseData);
