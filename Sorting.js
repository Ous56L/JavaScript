// Sort() = method used to sort elements of an array in place.
//         Sorts elements as strings in lexicographic order, not alphabetical
//         lexicographic = (alphabic + numbers + symbols) as strings


let numbers= [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

numbers.sort((a ,b) => a - b);

console.log(numbers);

//----------------------------------------------------

const Team_5DS=[{name: "Yusei", age: 18, gpa:2.4},
                {name: "Jack", age: 19, gpa: 3.4},
                {name: "Crow", age: 17, gpa: 2.2},
                {name: "Aki", age: 18, gpa: 2.3},
                {name: "Ruka", gae: 13, gpa: 1.2},
                {name: "Rua", age: 13, gpa: 1.3}]

Team_5DS.sort((a, b) => b.name.localeCompare(a.name));

console.log(Team_5DS);