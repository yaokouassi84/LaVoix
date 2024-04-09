// Définition du module AngularJS
/*angular.module("myApp", [])
    .controller("MyController", function($scope) {
        $scope.name = "Mr Local!";
    })
    .controller("TwoController", function($scope) {
        $scope.bjr = " YAO !";
    })
    .controller("FreeController", function($scope) {
        $scope.trois = " Trois !";
    })
    
    .controller("KaController", function($scope) {
        $scope.quatre = " Quatre !";
	});
	*/
	
	angular.module("myApp", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider
            .when("/view1", {
                templateUrl: "views/view1.html",
                controller: "MyController"
            })
            .when("/view2", {
                templateUrl: "views/view2.html",
                controller: "TwoController"
            })
            .when("/view3", {
                templateUrl: "views/view3.html",
                controller: "FreeController"
            })
            .when("/view4", {
                templateUrl: "views/view4.html",
                controller: "KaController"
            })
            .otherwise({
                redirectTo: "/view1"
            });
    });

angular.module("myApp")
    .controller("MyController", function($scope) {
        $scope.name = "Mr Local!";
    })
    .controller("TwoController", function($scope) {
        $scope.bjr = " YAO !";
    })
    .controller("FreeController", function($scope) {
        $scope.trois = " Trois !";
    })
    .controller("KaController", function($scope) {
        $scope.quatre = " Quatre !";
    })
    .controller("NavController", function($scope, $location) {
        $scope.navigateTo = function(viewPath) {
            $location.path(viewPath);
        };
    });
