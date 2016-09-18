/**
* @Author: Felipe Gonçalves Marques
* @Date:   2016-09-18 00:09:60
* @Email:  marques.goncalves.felipe@gmail.com
* @Last modified by:   Felipe Gonçalves Marques
* @Last modified time: 2016-09-18 01:09:62
*/
var leadService = require('./lead.service.js');
module.exports = {
  'post': function(req, res) {
    lead = req.body;
    console.log(lead);
    leadService.saveLead(lead, function(worked) {
      return res.json({"result": worked});
    });
  }
}
