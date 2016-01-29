// Map

var array = [7, 13, 11, 21, 42, 1880];

// Challenge - Cete a new array where each element is two times its original value

var map = _.map(array, function(x){
	return x * 2;
});

console.log(array, map);

// Reduce

var string = "Gym Tan Laundry";

var reduce = _.reduce(string.split(" "), function(runningTotal, currentWord) {
	return  runningTotal + currentWord[0] + ".";
}, "");

console.log(reduce);

// Find/Filter: The syntax for filter is exactly the same!

var teddyBears = [
	{
		name : "Steve",
		fluffiness : 1, 
		diet : "souls",
		huggability : 5,
		ownedBySean : true,
	},
	{
		name : "Teddy Ruxspin",
		fluffiness : 10, 
		diet : "batteries",
		huggability : 5,
		ownedBySean : false,
	},
	{
		name : "Hulk",
		fluffiness : 1, 
		diet : "souls",
		huggability : 5,
		ownedBySean : true,
	},
	{
		name : "Ted",
		fluffiness : 1, 
		diet : "children\' tears",
		huggability : 7,
		ownedBySean : true,
	}
]

var finder = _.find(teddyBears, function (bear) {
	return bear.huggability === 5;
})

console.log(finder);

// Pluck

var plucking = _.pluck(teddyBears, "diet");
console.log(plucking);

// Uniq

var uniqly = _.uniq(plucking);

console.log(uniqly);

// Chain

console.log(chainZZZ = _.chain(teddyBears)
	.pluck("diet")
	.uniq()
	.value()
)