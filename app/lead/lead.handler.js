/**
* @Author: Felipe Gonçalves Marques
* @Date:   2016-09-18 00:09:60
* @Email:  marques.goncalves.felipe@gmail.com
* @Last modified by:   Felipe Gonçalves Marques
* @Last modified time: 2016-09-22 19:09:38
*/
var requestIp = require('request-ip');
var ip = require('ip');
var leadService = require('./lead.service.js');
module.exports = {
  'post': function(req, res) {
    lead = req.body;
    console.log(lead);
    var come_ip = requestIp.getClientIp(req);
    console.log(come_ip);
    var my_ip = ip.toLong(come_ip);
    lead['ip'] = my_ip;
    console.log(lead);
    console.log(my_ip);
    console.log(ip.fromLong(my_ip));
    leadService.saveLead(lead, function(worked) {
      console.log('Returned');
      return res.json({"result": worked, "path": 'be20282e3b6184de9b1a7d430a28db9e'});
    });
  }
}
