/**
* @Author: Felipe Gonçalves Marques
* @Date:   2016-09-17 20:09:13
* @Email:  marques.goncalves.felipe@gmail.com
* @Last modified by:   Felipe Gonçalves Marques
* @Last modified time: 2016-09-18 19:09:32
*/

var mongoose = require('mongoose');

var leadSchema = {
  name: {type: String, required: true},
  email: {type: String,
          trim: true,
          lowercase: true,
          unique: true,
          required: true,
          match: /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i
        },
  ip: {type: Number,
       get: v => Math.round(v),
       set: v => Math.round(v),
       required: true},
  created_at: {type: Date,
    default: Date.now
  }
}

module.exports = new mongoose.Schema(leadSchema);
module.exports.leadSchema = leadSchema;
