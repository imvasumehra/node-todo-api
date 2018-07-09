//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://vasumehra:vasu123@ds131711.mlab.com:31711/node-todo-api' || 'mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');
});

//  db.collection('Todos').insertOne({
//    text: 'Something',
//    completed: 'false'
//  },(err, result) => {
//    if(err) {
//      return console.log('Unable to insert todo', err);
//    }
//
//    console.log(JSON.stringify(result.ops, undefined, 2));
//  });

//   db.collection('Users').insertOne({
//     name: 'Vasu',
//     age: 22
//   },(err, result) => {
//     if(err) {
//       return console.log('Unable to insert users', err);
//     }
//
//     console.log(result.ops[0]._id.getTimestamp());
//   });
//
//   db.close();
// });
