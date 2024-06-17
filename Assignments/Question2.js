function Day(year,month,day){
   this.year=year
   this.month=month
   this.day=day
}
Day.prototype.getYear = function() {
    return this.year;
};

Day.prototype.getMonth = function() {
    return this.month;
};

Day.prototype.getDay = function() {
    return this.day;
};

function getDaysinMonth(year, month) {
    
    let daysInMonth;
    if (month === 2) {
       
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            daysInMonth = 29;
        } else {
            daysInMonth = 28;
        }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        daysInMonth = 30; 
    } else {
        daysInMonth = 31; 
    }
    let daysArray = [];
    for (let day = 1; day <= daysInMonth; day++) {
        daysArray.push(new Day(year, month, day));
    }

    return daysArray;
}


let daysInFebruary2024 = new getDaysinMonth(2024, 2);

daysInFebruary2024.forEach(day => {
    console.log(`Year: ${day.getYear()}, Month: ${day.getMonth()}, Day: ${day.getDay()}`);
});