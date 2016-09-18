/**
* @Author: Felipe Gonçalves Marques
* @Date:   2016-09-18 01:09:04
* @Email:  marques.goncalves.felipe@gmail.com
* @Last modified by:   Felipe Gonçalves Marques
* @Last modified time: 2016-09-18 12:09:21
*/

'use strict';

angular.
  module('lead').
  component('lead', {
    templateUrl: 'lead/lead.template.html',
    controller: function LeadController() {
      console.log('Hello, controller!');
    }
  });
