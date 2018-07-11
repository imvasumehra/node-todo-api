var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

const {ObjectID} = require('mongodb');

//Todo remove
 // Todo.remove({}).then((result) =>{
   // console.log(result)
 // });
Todo.findOneAndRemove({_id:'5b4385db5a238b1002afa7bc'}).then((todo) => {
  console.log(todo)
})


// Todo.findByIdAndRemove('5b4385225a238b1002afa75a').then((todo) => {
  // console.log(todo)
// })
