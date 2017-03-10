/**
 * edited by TRaill on March 10, 2017.
 */
// express setup
var express = require('express');
var router = express.Router();

// link to the book model for CRUD operations
var account = require('../models/account');

// auth check
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next(); // user is logged, so call the next function
    }

    res.redirect('/'); // not logged in so redirect to home
}

/* GET users main page */
router.get('/users', isLoggedIn, function(req, res, next) {

    // use mongoose model to query mongodb for all books
    Account.find(username, _id, function(err, account) {
        if (err) {
            console.log(err);
            res.end(err);
            return;
        }

        // no error so send the books to the index view
        res.render('/users', {
            account: account,
            title: 'User List',
            user: req.user
        });
    });
});

// make this file public
module.exports = router;
