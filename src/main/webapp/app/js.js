 angular.module('clockApp', [])
            .controller('ClockController', ['$scope', '$interval', function($scope, $interval) {
                $scope.currentTime = new Date();

                // Fonction pour formater l'heure au format "23 h 57 min 45 s"
                $scope.formatTime = function() {
                    var hours = $scope.currentTime.getHours();
                    var minutes = $scope.currentTime.getMinutes();
                    var seconds = $scope.currentTime.getSeconds();
                    
                    return hours + " h " + minutes + " min " + seconds + " s";
                };

                // Mettre à jour l'heure formatée chaque seconde
                $interval(function() {
                    $scope.currentTime = new Date();
                    $scope.formattedHours = $scope.currentTime.getHours();
                    $scope.formattedMinutes = $scope.currentTime.getMinutes();
                    $scope.formattedSeconds = $scope.currentTime.getSeconds();
                }, 1000);
            }]);