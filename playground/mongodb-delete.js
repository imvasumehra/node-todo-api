//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');

//deleteMany
//db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
//  console.log(result);
//});

//deleteOne
// db.collection('Todos').deleteOne({text: 'Something'}).then((result) => {
//   console.log(result);
// })

//FindOneandD('elete
db.collection('Users').deleteMany({name: 'Vasu'}).then((result) =>{
  console.log("yeah!!!")
});

 db.collection('Users').deleteOne({name: 'Udit'}).then((result) =>{
   console.log("yeah!!!")
});


  //db.close();
});
