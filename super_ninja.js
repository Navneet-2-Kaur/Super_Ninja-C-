/**
 * Extend the Ninja class and create the Sensei class. 
A Sensei should have 200 Health, 10 speed, and 10 strength by default. 
In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. 
Finally, add the speakWisdom() method. 
speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.
 * 
 */

// partent Vehicle class
class Ninja {
  constructor(name){
    this.name = name; 
    this.health = 90;
    this.speed = 3;
    this.strength = 3;
  }

  sayName(){
    console.log(`Name: ${this.name}`);
    return this;
  }
  showStats(){
    console.log(`Name:      ${this.name}`);
    console.log(`Strength:  ${this.strength}`);
    console.log(`Speed:     ${this.speed}`);
    console.log(`Health:    ${this.health}`);
    return this;
  }
  
  drinkSake(){
    console.log(`${this.name} drank sake.`);
    this.health += 10;
    return this;
  }
  
}
// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName().showStats();

// child Sensei class
class Sensei extends Ninja {
  constructor(name){
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }
  // function in the child class
  speakWisdom(){
    super.drinkSake(); 
    console.log(`Sensei Steve Jobs says: \nEverybody should learn to program a computer because it teaches you how to think.  \n~** Wisdom Jutsu **~|__(._.)__/~** Wisdom Jutsu**~ \nYour current wisdom score is at ${this.wisdom} pts! `) 
  } 
  showStats(){
    console.log(`Name:      ${this.name}`);
    console.log(`Health:    ${this.health}`);
    console.log(`Speed:     ${this.speed}`);
    console.log(`Strength:  ${this.strength}`);
    return this;
  }
}
const superSensei = new Sensei("Master Scorpion");
superSensei.speakWisdom();
superSensei.showStats();
/**
 * Extend the Ninja class and create the Sensei class. 
A Sensei should have 200 Health, 10 speed, and 10 strength by default. 
In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. 
Finally, add the speakWisdom() method. 
speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.
 * 
 */