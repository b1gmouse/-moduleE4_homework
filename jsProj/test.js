// класс с методом вкл/выкл
class checkConnection{
  constructor(name,isTurned)  {
    this.isTurned = isTurned
    this.name = name
  }
  showPos() {
    console.log('Your  ' + this.name + ' is turned ' + this.isTurned)
  }
}

class checkEfficiency extends checkConnection{
  showEfficiency() {
    console.log('Your '+ this.name + ' is turned '+ this.isTurned +' and work normally!')
  }
}

const lamp = new checkConnection('lamp', 'on');
lamp.showPos();
const tv = new checkConnection('tv', 'off');
tv.showPos();
const pc = new checkEfficiency('pc', 'on');
pc.showEfficiency();
