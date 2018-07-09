var mongoose = require('mongoose')

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});


//var user = new User({
//  email: 'vasumail007@gmail.com     '
//});

//user.save().then((d) =>{
//  console.log(d)
//})

module.exports = {
  User: User
}
