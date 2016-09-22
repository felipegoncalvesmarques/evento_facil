/**
* @Author: Felipe Gonçalves Marques
* @Date:   2016-09-18 01:09:04
* @Email:  marques.goncalves.felipe@gmail.com
* @Last modified by:   Felipe Gonçalves Marques
* @Last modified time: 2016-09-22 19:09:43
*/

'use strict';

angular.
  module('lead').
  component('lead', {
    templateUrl: 'lead/lead.template.html',
    controller: ['leadService', '$window', function LeadController(leadService, $window) {
      this.cadastrarLead = function(lead) {
          console.log(lead['name'] + ' ' + lead['email']);
          var result = leadService.saveLead(lead['name'], lead['email'], function(result, path) {
            if (result == true) {
              $window.location.href = '/' + path +'.pdf'
            }
            else alert('Cadastro não efetuado! Email já cadastrado!');
          });
      }
    }]

  });
