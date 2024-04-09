angular.module("mySite", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider
        .when("/", {
                templateUrl: "templates/accueil.html",
                controller: "IndexController"
            })
            .when("/accueil", {
                templateUrl: "templates/accueil.html",
                controller: "AccueilController"
            })
            .when("/services", {
                templateUrl: "templates/livres.html",
                controller: "LivresController"
            })
            .when("/produitsDetails", {
                templateUrl: "templates/details.html",
                controller: "ProduitsDetailsController"
            })
            .when("/livresPdfs", {
                templateUrl: "templates/livresPdfs.html",
                controller: "LivresPdfsController"
            })
            .when("/tutos", {
                templateUrl: "templates/tutos.html",
                controller: "TutosDetailsController"
            })
            .when("/search", {
                templateUrl: "templates/search.html",
                controller: "SearchController"
            })
            .when("/contact", {
                templateUrl: "templates/contact.html",
                controller: "ContactController"
            })
            .when("/404", {
                templateUrl: "pages/404.html",
                controller: "ErrorController"
            })
            .when("/addLivres", {
                templateUrl: "templates/formLivres.html",
                controller: "BookController" // Le contrôleur pour la page d'ajout de livres
            })
            .otherwise({
                redirectTo: "/"
            });
    });

angular.module("mySite")
    .controller("AccueilController", function($scope) {
        $scope.name = "Mr Local!";
    })
    .controller("ShopController", function($scope) {
        $scope.bjr = " YAO !";
    })
    .controller("FreeController", function($scope) {
        $scope.trois = " Trois !";
    })
    .controller("KaController", function($scope) {
        $scope.quatre = " Quatre !";
    })
    .controller("BookController", function($scope, LivreService) { // Ajout du contrôleur pour la page d'ajout de livres
        $scope.livre = {};
        $scope.ajouterLivre = function() {
            LivreService.ajouterLivre($scope.livre, $scope.image1, $scope.image2)
                .then(function(response) {
                    console.log('Livre ajouté avec succès');
                    // Réinitialiser le formulaire ou effectuer toute autre action nécessaire
                })
                .catch(function(error) {
                    console.error('Erreur lors de l\'ajout du livre', error);
                });
        };
    })
    .controller("NavController", function($scope, $location) {
        $scope.navigateTo = function(viewPath) {
            $location.path(viewPath);
        };
    });
