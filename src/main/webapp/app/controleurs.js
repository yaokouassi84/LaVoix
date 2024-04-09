/*angular.module('myControl1', [])
.controller('MyController1', function($scope) {
	$scope.ok = "Bonjour Mr YAO";
});

angular.module('myControl2', [])
.controller('MyController2', function($scope) {
	$scope.ko = "Bonsoir Marck";
});*/


// Définir un seul module principal pour votre application
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
angular.module("myTotal", ["myGestion", "myGestion2"]);

