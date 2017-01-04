angular.module('services', [])
        .factory('myService', function () {
            var savedData = [
                {id: 1, name: "Jens", age: 18},
                {id: 2, name: "Peter", age: 23},
                {id: 3, name: "Hanne", age: 23}
            ];
            function get() {
                return savedData;
            }
            function set(data) {
                savedData = data;
            }

            return {
                set: set,
                get: get
            };
        });