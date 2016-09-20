/**
* @Author: Felipe Gonçalves Marques
* @Date:   2016-09-18 01:09:04
* @Email:  marques.goncalves.felipe@gmail.com
* @Last modified by:   Felipe Gonçalves Marques
* @Last modified time: 2016-09-19 23:09:39
*/

'use strict';

angular.
  module('lead').
  component('lead', {
    templateUrl: 'lead/lead.template.html',
    controller: ['leadService', function LeadController(leadService) {
      this.cadastrarLead = function(lead) {
          console.log(lead['name'] + ' ' + lead['email']);
          var result = leadService.saveLead(lead['name'], lead['email'], function(result) {
            if (result == true) alert('Cadastro efetuado!');
            else alert('Cadastro não efetuado! Email já cadastrado!');
          });
      }
    }]

  });
