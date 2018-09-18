const MongoClient = require('mongodb').MongoClient;
const urldb = 'mongodb://localhost:27017';
const dbname = 'smb';

module.exports = (function(){
  return {
    list: function(req, res) {
      MongoClient.connect(urldb, function(err, client){
        console.log('Getting Clientes...');

        const db = client.db(dbname);
        let obj = [];

        db.collection('person')
          .find({})
          .toArray(function(err, docs){
            obj = docs;
          });
        res.json(obj);

        client.close();
      });
    },
  
    create: function(req, res) {
  
    },
  
    edit: function(req, res) {
  
    },
  
    delete: function(req, res) {
  
    }
  };
}());
