function car(model, year) {
    this.carModel = model;
    this.year = year;
}

bmw = new Car('3351', 2021);
console.log(bmw.carModel);

mercedes = new Car('C250', 2017);
console.log(mercedes.carModel);