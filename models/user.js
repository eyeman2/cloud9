const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Save a reference to the Schema constructor
var Schema = mongoose.Schema;

//Using the Schema constructor, creat ea new UserSchema object.  This is similar to a Sequelize model
var UserSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    password: { type: String },
    googleId: { type: String },
    displayName: String,
    photoUrl: String,
});

UserSchema.pre('save', function(next){
    this.hashPassword();
    if(this.email){
        this.displayName = this.email;
    }
    next();
});

UserSchema.methods.hashPassword = function(){
    if(!this.password) 
    return;
    const hash = bcrypt.hashSync(this.password, 10);
    this.password = hash;
}

UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

var User = mongoose.model('User', UserSchema);

module.exports = User;