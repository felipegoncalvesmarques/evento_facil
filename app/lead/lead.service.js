/**
* @Author: Felipe Gonçalves Marques
* @Date:   2016-09-17 21:09:69
* @Email:  marques.goncalves.felipe@gmail.com
* @Last modified by:   Felipe Gonçalves Marques
* @Last modified time: 2016-09-18 00:09:09
*/

var mongoose = require('mongoose');
var leadSchema = require('./lead.schema.js')

mongoose.connect('mongodb://localhost:27017/evento_facil');

//Parameters are: model, name, schema, collection, name
var Lead = mongoose.model('Lead', leadSchema, 'leads')

function saveLead(lead, callback) {
  var leadObject = new Lead(lead);
  leadObject.save(function(err, leadObj) {
    if (err) {
      console.log(err.toString());
      return callback(false)
    }
    return callback(true);
  });
}
module.exports.saveLead = saveLead;
