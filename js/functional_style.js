console.log("-------------------------- [functional style] --------------------------");

function Robot() {
	var this_obj = this;

	this_obj.work = "I'm a robot - I just work";

	this_obj.getWork = function() {
		return this_obj.work;
	}

	this_obj.setWork = function(value) {
		this_obj.work = value;
	}
};

function CoffeeRobot() {
	Robot.call(this);

	var this_obj = this;

	work = "I'm CoffeRobot - I make coffee";

	this_obj.getWork = function() {
		return work;
	}
};

function RobotDancer() {
	Robot.call(this);
};

function RobotCoocker() {
	Robot.call(this);
};

var robot = new Robot();
console.log(robot.getWork());

var coffee = new CoffeeRobot();
console.log(coffee.getWork());

var dancer = new RobotDancer();
dancer.setWork("I'm DancerRobot - I'm just dancing");
console.log(dancer.getWork());

var cook = new RobotCoocker();
cook.setWork("I'm RobotCoocker - I'm just cooking");
console.log(cook.getWork());

console.log("\n");

var array = [];
array.push(robot, coffee, dancer, cook);

for (var i = 0; i < array.length; i++) {
	var element = array[i];
	console.log(element.getWork());
}