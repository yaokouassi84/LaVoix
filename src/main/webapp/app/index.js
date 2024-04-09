function MyDataService() {
	return {
		getWorlds: function getWorlds() {
			return ["this world", "another world"];
		}
	};
}
function DemoController(worldsService) {
	var vm = this;
	vm.messages = worldsService.getWorlds().map(function(w) {
		return "Hello, " + w + "!";
	});
}
function startup($rootScope, $window) {
	$window.alert("Hello, user! Loading worlds...");
	$rootScope.hasStarted = true;
}
angular.module("myDemoApp", [/* module dependencies go here */])
	.service("worldsService", [MyDataService])
	.controller("demoController", ["worldsService", DemoController])
	.config(function() {
		console.log('configuring application');
	})
	.run(["$rootScope", "$window", startup]);

