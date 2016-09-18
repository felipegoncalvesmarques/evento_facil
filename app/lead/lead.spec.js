/**
* @Author: Felipe Gonçalves Marques
* @Date:   2016-09-17 21:09:75
* @Email:  marques.goncalves.felipe@gmail.com
* @Last modified by:   Felipe Gonçalves Marques
* @Last modified time: 2016-09-18 00:09:16
*/

var assert = require('assert');
var leadService = require('./lead.service.js');

describe('Lead Service well used', function() {
  it('should save Lead', function(done) {
    lead = {name: 'Felipe Gonçalves Marques',
            email: "marques.goncalves.felipe@gmail.com",
            ip: 2886794753};

    leadService.saveLead(lead, function(worked) {
      assert.equal(true, worked);
      done();
    });
  });
});
