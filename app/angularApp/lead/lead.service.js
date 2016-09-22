/**
* @Author: Felipe Gonçalves Marques
* @Date:   2016-09-19 21:09:41
* @Email:  marques.goncalves.felipe@gmail.com
* @Last modified by:   Felipe Gonçalves Marques
* @Last modified time: 2016-09-22 19:09:34
*/

var service = angular.module('leadService', ['ngResource']);
service.
  factory('leadCore', ['$resource',
    function($resource) {
    return $resource('/saveLead', {}, {
      post: {
          method: 'POST',
        }
      });
    }
  ]);
service.
  factory('leadService', function(leadCore) {
    var factory = {};
    factory.saveLead = function(name, email, callback) {
      return leadCore.post({'name': name, 'email': email}, function(data) {
        console.log(data);
        return callback(data['result'], data['path']);
      });
    }
    return factory;
  });
