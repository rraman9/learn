const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require ('../config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp}, config.secret);
}

exports.signin = function(req, res, next) {
    // User has already had their email and password authenticated, just need to give them the token
    res.send({token: tokenForUser(req.user)});
}

exports.signup = function(req, res, next) {
    // See if a user with email exists
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) {
        return res.status(422).send({error: 'You must provide an email and password'});
    }

    // If user with email does exist, return an error
    User.findOne({email: email}, function(err, existingUser) {
        if (err) {
            return next(err);
        }
        // If user with email does not exist, create and save user record
        if (existingUser) {
            console.log('this is an existing eror, send a 422 response');
            return res.status(422).send({error: 'Email in use'});
        }
        // Respond to user indicating user was created
        const user = new User({
            email: email,
            password: password
        });
        user.save(function(err) {
            if (err) {
                return next(err);
            }
            res.json({token:tokenForUser(user)});
        });
    });

}