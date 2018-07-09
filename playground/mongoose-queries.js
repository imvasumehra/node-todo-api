const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id ='b3afaf69f8f9f03364de200';

if (!ObjectID.isValid(id)) {
  console.log('Notvalid')
}

// Todo.find({
//   _id: id
// }).then((todos)=> {
//   console.log(todos)
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log(todo)
// })

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Not found')
//   }
//   console.log(todo)
// }).catch((e) => {
//   console.log(e);
// })
