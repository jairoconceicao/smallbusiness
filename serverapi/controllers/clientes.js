const MongoClient = require('mongodb').MongoClient;
const urldb = 'mongodb://localhost:27017';
const dbname = 'smb';

module.exports = (function(){
  return {
    list: function(req, res) {
      MongoClient.connect(urldb, function(err, client){
        console.log('Getting Clientes...');

        const db = client.db(dbname);

        new Promise((resolve, reject) => {
          let obj = db.collection('person')
                      .find()
                      .toArray();
          resolve(obj);
        }).then( data => {
          client.close();
          res.json(data);
        });
      });
    },
  
    create: function(req, res) {
      var form = res.body;
      
      MongoClient.connect(urldb, function(err, client){
        console.log('Saving Cliente...');
        const db = client.db(dbname);

        db.collection('person').insertOne(form);

        client.close();
        
      });
  
    },
  
    edit: function(req, res) {
  
    },
  
    delete: function(req, res) {
  
    }
  };
}());
