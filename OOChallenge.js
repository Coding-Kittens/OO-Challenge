class Vehicle{
  constructor(make,model,year){
    this.make =make;
    this.model =model;
    this.year =year;

  }

 honk(){
console.log('Beep!');
 }

 toString(){
return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
 }

}

class Car extends Vehicle
{
constructor(make,model,year)
{
  super(make,model,year);
  this.numWheels = 4
}

}

class Motorcycle extends Vehicle
{
constructor(make,model,year)
{
  super(make,model,year);
  this.numWheels = 2
}
revEngine(){
  console.log("VROOM!!!");
}
}


class Garage
{
constructor(capacity)
{
this.capacity = capacity;
this.currentCapacity =0;
this.vehicleList = [];
}

add(vehicle)
{
  if(vehicle instanceof Vehicle){
    if(this.currentCapacity < this.capacity){
      console.log("Vehicle added!");
      this.vehicleList.push(vehicle);
      this.currentCapacity++;
    }
else{
  console.log("Sorry, we're full.");
}
  }
  else{
    console.log("Only vehicles are allowed in here!");
  }

}

vehicles()
{
  return this.vehicleList;
}

}


const car1 = new Vehicle("Honda", "Monster Truck", 1999);
console.log(car1.toString());
car1.honk();

const car2 = new Car("Toyota", "Corolla", 2005);
console.log(car2.toString());
car2.honk();
console.log(car2.numWheels);

const motorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
console.log(motorcycle.toString());
motorcycle.honk();
console.log(motorcycle.numWheels);
motorcycle.revEngine();



const garage = new Garage(3);

garage.add(car1);
garage.add(car2);
garage.add(motorcycle);
garage.add(motorcycle);
console.log(garage.vehicles());

garage.add("Taco");
