angular.module('listings').factory('Listings', ['$http', 
  function($http) {
    var methods = {
      getAll: function() {
        return $http.get('assignment-6-ming.herokuapp.com/api/listings/api/listings/');
      },

      create: function(listing) {
        return $http.post('assignment-6-ming.herokuapp.com/api/listings/api/listings/', listing);
      }, 

      read: function(id) {
        return $http.get('assignment-6-ming.herokuapp.com/api/listings/api/listings/' + id);
      }, 

      update: function(id, listing) {
        return $http.put('assignment-6-ming.herokuapp.com/api/listings/api/listings/' + id, listing);
      }, 

      delete: function(id) {
        return $http.delete('assignment-6-ming.herokuapp.com/api/listings/api/listings' + id);
      }
    };

    return methods;
  }
]);