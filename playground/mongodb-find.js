//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://vasumehra:vasu123@ds131711.mlab.com:31711/node-todo-api' || 'mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');

 // db.collection('Todos').find({
 //   _id: new ObjectID('5b3a1c313a0ff00854457d43')
 // }).toArray().then((docs) =>{
 //   console.log('Todos');
 //   console.log(JSON.stringify(docs, undefined, 2));
 // }), (err) => {
 //   console.log('Not connected');
 // };

 // db.collection('Todos').find().count().then((count) =>{
 //   console.log(`Todos count: ${count}` );
 // }), (err) => {
 //   console.log('Not connected');
 // };
 // db.collection('Users').find({name: 'Vasu'}).toArray().then((docs) =>{
 //   console.log(JSON.stringify(docs, undefined, 2));
 // }), (err) => {
 //   console.log('Not connected');
 // };

  //db.close();
});
