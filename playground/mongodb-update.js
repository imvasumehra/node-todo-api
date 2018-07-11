//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5b3a5de60b6d0bd245a6a5d0')
// },{
//   $set: {
//     completed: false
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result)
// }
// )

// db.collection('Todos').findOneAndUpdate({
//   text: 'Something'
// }, {
//   $set: {
//     text: 'Vasu'
//   }, $inc: {
//     age: 1
//   }
// }, {
//     returnOriginal: false
//
// }).then((result) => {
//   console.log(result);
// })
  //db.close();
});
