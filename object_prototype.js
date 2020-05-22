function speed(miles) {
    console.log(miles);
}


function car(model, year) {
    this.carModel = model;
    this.year = year;
}

Car.prototype.speed = speed;

var bmw = new Car('3351', 2021);

bmw.speed('100');