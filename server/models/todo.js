var mongoose = require('mongoose')

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

//var newTodo = new Todo({
//  text: 'Vaaasu'
//});

//newTodo.save().then((d) => {
//  console.log('Saved',JSON.stringify(d,undefined,2));
//},(e) => {
//  console.log(e);
//});

module.exports = {
  Todo
}
