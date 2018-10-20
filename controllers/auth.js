const passport = require('../passport/passport');
const router = require('express').Router();
const db = require('../models');

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/login'
    })    
);

router.post('/', (req, res) => {
    db.user.create(req.body)
    .then((results) => {
        res.json
    })
});

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.json({ user: req.user })
});

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

router.get('/getUser', (req, res) => {
    if(req.user){
        res.json({ user: req.user });
    }
    else{
        res.json({ user: null })
    }
});

module.exports = router