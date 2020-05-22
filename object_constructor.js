var Car = function () {
    var model, year;
    return console.log(this);
};

bmw = new Car();
bmw.model = '3351';
console.log(bmw.model);

mercedes = new Car();
mercedes.model = 'C250';
console.log(mercedes.model);