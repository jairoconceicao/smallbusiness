module.exports = (function(){
  const MongoClient = require('mongodb').MongoClient;
  const urldb = 'mongodb://localhost:27017';
  const dbname = 'smb';

  return {
    connect: function(){
      MongoClient.connect(urldb, function(err, client){
        return client.db(dbname);
      });
    }
  }
}());
