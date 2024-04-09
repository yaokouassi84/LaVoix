/*angular.module('myApp', [])
	.component('helloWorld', {
		template: '<span>Bonjour sa va  !</span>'
	});
	
	*/
/*angular.module("myApp", [])
	.component("helloWorld", {
		template: '<span>Hello {{$ctrl.name}}!</span>',
		bindings: { name: '@' }
	});
*/

// Définir le module 'myApp' et son composant
angular.module("myApp", [])
	.component("helloWorld", {
		template: "Hello {{$ctrl.name}}, I'm {{$ctrl.myName}}!",
		bindings: { name: '@' },
		controller: function() {
			this.myName = 'YAO';
		}
	});

// Définir le module 'mySecondApp' et son contrôleur
angular.module("mySecondApp", [])
	.controller('SecondController', function($scope) {
		$scope.message = 'Mon Second Module';
	});


angular.module('myGestion', [])
    // Définir le contrôleur 'MyController1' dans le module principal 'myApp'
    .controller('MyControllerUn', function($scope) {
        $scope.ok = "Bonjour Mr YAO";
    });
    
    // Définir le contrôleur 'MyController2' dans le module principal 'myApp'
    angular.module('myGestion2', [])
    .controller('MyControllerTwoo', function($scope) {
        $scope.ko = "Bonsoir Marck";
    });
    
// Définir le module principal 'myMainApp' et inclure les autres modules
angular.module("myMainApp", ["myApp", "mySecondApp","myGestion", "myGestion2"]);