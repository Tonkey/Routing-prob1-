
var controllers = angular.module('allPersonsController', []).controller('Controller1', ['$scope','$routeParams', 'myService', function ($scope, $routeParams, myService) {

        $scope.persons = myService.get();

        $scope.ID = $routeParams.ID;

        $scope.submit = function () {
            var clonedData = myService.get();
            clonedData.push({id: clonedData.length+1, name: $scope.formName, age: $scope.formAge});
            myService.set(clonedData);

        };

    }]);
