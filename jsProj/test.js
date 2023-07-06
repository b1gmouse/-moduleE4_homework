// класс с методом вкл/выкл E4.5
class ElectricalAppliance
  {
    constructor(name, power, isTurned){
      this.name = name;
      this.power = power;
      this.isPlugged = isTurned;
    }
    
    checkPlugIn(){
      if (this.isPlugged == 'on') console.log(this.name + " is plugged!")
      else console.log(this.name + " is not plugged!")
    }
    
    getPower(){
      return this.power
    }
  }

const fridge = new ElectricalAppliance('fridge', 900, 'on');
const pc = new ElectricalAppliance('pc', 850, 'on');

console.log(fridge.getPower() + pc.getPower());
fridge.checkPlugIn();
pc.checkPlugIn();


// E4.3
function createObj(){
  return Object.create(null)
}

console.log(createObj())


const myObject = {
  age : 23
}
function printRes(object){
  console.log('Hello world!')
}
printRes(myObject)


function compareFeatures(object, feature){
  if (feature in object) return true
  else return false
}
console.log(compareFeatures(myObject, 'age'))

// E4.4
function ElectricalAppliance(name, power, isTurned) {
  this.name = name;
  this.power = power;
  this.isPlugged = isTurned;
}

ElectricalAppliance.prototype.checkPlugIn = function() {
  if (this.isPlugged == 'on') console.log(this.name + " is plugged!")
  else console.log(this.name + " is not plugged!");
}

ElectricalAppliance.prototype.getPower = function() {
  return this.power;
}

const fridge = new ElectricalAppliance('fridge', 900, 'on');
const pc = new ElectricalAppliance('pc', 850, 'on');

console.log(fridge.getPower() + pc.getPower());
fridge.checkPlugIn();
pc.checkPlugIn();
