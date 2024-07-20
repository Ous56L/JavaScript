// Date objects = Objects that contain values that represent dates and times
//                Theses date objects can be changed and formatted


// Date(year, month, day, hour, minute, second, ms)

const date = new Date();

//const year = date.getFullYear();
//const month = date.getMonth();
//const day = date.getDate();
//const hour = date.getHours();
//const minutes = date.getMinutes();
//const seconds = date.getSeconds();
//const dayofWeek = date.getDay();
//const ms = date.getMilliseconds();


//console.log(year);
//console.log(month);
//console.log(day);
//console.log(hour);
//console.log(minutes);
//console.log(seconds);
//console.log(dayofWeek);
//console.log(ms);



date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(3);
date.setMinutes(5);
date.setSeconds(2);
date.setMilliseconds(6);

console.log(date);