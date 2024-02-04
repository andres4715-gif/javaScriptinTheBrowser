function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

const car1 = new Car("chevrolet", "swift", 1993);
const car2 = new Car("renault", "clio", 2005);
const car3 = new Car("chevrolet", "aveo gt", 2011);
const car4 = new Car("mazda", "3", 2013);

document.getElementById("demo").innerHTML = "the green car was " + car1.model;
