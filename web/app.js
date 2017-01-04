angular.module('MyApp', [
    'ngRoute',
    'services',
    'allPersonsController'
    ])
        .config(function ($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'views/AllPersons/allPersons.html',
                        controller: 'Controller1'
//                        controllerAs: 'ctrl'

                    }).when('/person/:ID',{
                        templateUrl: 'views/AllPersons/personDetail.html',
                        controller: 'Controller1'
//                        controllerAs: 'ctrl'
                    })
                    .when('/newPerson', {
                        templateUrl: 'views/AllPersons/newPersons.html',
                        controller: 'Controller1'
//                        controllerAs: 'ctrl'
                    });
        });
        