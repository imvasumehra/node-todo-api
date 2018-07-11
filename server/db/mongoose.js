var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://vasumehra:vasu123@ds131711.mlab.com:31711/node-todo-api'|| 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
