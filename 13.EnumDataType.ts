enum days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

console.log(days.Sunday); // 0

enum days2 {
    Sun = "Sunday",
    Mon = "Monday",
    Tue = "Tuesday",
    Wed = "Wednesday",
    Thu = "Thursday",
    Fri = "Friday",
    Sat = "Saturday"
}

console.log(days2.Mon); // Sunday


function printDay(day: days2) {
    console.log(day);
}

printDay(days2.Thu); // Thursday