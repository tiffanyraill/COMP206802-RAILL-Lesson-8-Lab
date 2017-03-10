/**
 * Created by tiffanyraill on 2017-03-08.
 */
var mongoose = require('mongoose');


//this is needed to tell the app this model is for managing user accounts
//it is not a regular model like book
var plm = require('passport-local-mongoose');

// create the schema, username and password are automatically included
var accountSchema = new mongoose.Schema({});

//enable plm on this model
accountSchema.plugin(plm);

//make the model public
module.exports = mongoose.model('Account', accountSchema);