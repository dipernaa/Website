angular.module('myApp').controller('MainCtrl', function($scope, $timeout) {
    $scope.isWinter = new Date().getTime() < new Date(2015, 1, 18).getTime();

    if($scope.isWinter) {
        tick();
    }
    function tick() {
        var millis = new Date(2015, 1, 18) - new Date();
        $scope.days = (millis / (1000*3600*24)).toFixed(0);
        $scope.hours = (millis / (1000*3600)).toFixed(0) - ($scope.days * 24);
        $scope.minutes = (millis / (1000 * 60)).toFixed(0) - ($scope.days * 24 * 60) - ($scope.hours * 60)
        $scope.seconds = (millis / (1000)).toFixed(0) - ($scope.days * 24 * 3600) - ($scope.hours * 3600) - ($scope.minutes * 60) + 30;
        $timeout(tick, 1000);
    }
})