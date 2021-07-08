console.log("-------------------------- [prototype style] --------------------------");

function Robot() {	
	work = "I'm a robot - I just work";
}

Robot.prototype.setWork = function(value) {
	work = value;
}

Robot.prototype.getWork = function() {
	return work;
}

function CoffeeRobot() {
	this.work = "default";
}

function DancerRobot() {
	this.work = "default";
}

function CoockerRobot() {
	this.work = "default";
}

var robot = new Robot();
console.log(robot.getWork());

var coffee = new CoffeeRobot();
var cook = new CoockerRobot();
var dancer = new DancerRobot();

CoffeeRobot.prototype.setWork = function(value) {
	this.work = value;
}

CoffeeRobot.prototype.getWork = function() {
	return this.work;
}

CoockerRobot.prototype.setWork = function(value) {
	this.work = value;
}

CoockerRobot.prototype.getWork = function() {
	return this.work;
}

DancerRobot.prototype.setWork = function(value) {
	this.work = value;
}

DancerRobot.prototype.getWork = function() {
	return this.work;
}

coffee.setWork("I'm CoffeRobot - I make coffee");
console.log(coffee.getWork());

dancer.setWork("I'm DancerRobot - I'm just dancing");
console.log(dancer.getWork());

cook.setWork("I'm RobotCoocker - I'm just cooking");
console.log(cook.getWork());

console.log("\n");

var array = [];
array.push(cook, dancer, coffee, robot);

for (var i = 0; i < array.length; i++) {
	var element = array[i];
	console.log(element.getWork());
}