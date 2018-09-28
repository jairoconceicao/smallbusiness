const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');

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
      var form = req.body;
      
      MongoClient.connect(urldb, function(err, client){
        console.log('Saving Cliente...');
        const db = client.db(dbname);

        db.collection('person')
        .insertOne(form)
        .catch( (reason) => {
          console.log(reason);
          console.log( form );
        });

        let obj = db.collection('person')
        .find()
        .toArray();
        client.close();

        res.json(obj);

      });
    },
  
    edit: function(req, res) {
      var form = req.body;

      MongoClient.connect(urldb, function(err, client){
        console.log('Editing Cliente...');
        const db = client.db(dbname);

        db.collection('person')
        .findOneAndUpdate({ _id: ObjectId(req.params.id) }, {$set: form}, {returnOriginal: false})
        .then( (response) => {
          console.log(`Deletado ${response.deletedCount} registros`)
        }).catch( (reason) => {
          console.log(reason);
        });

        let obj = db.collection('person')
        .find()
        .toArray();

        client.close();

        res.json(obj);
      });
    },
  
    delete: function(req, res) {
      MongoClient.connect(urldb, function(err, client){
        console.log('Deleting Cliente...');
        const db = client.db(dbname);

        db.collection('person')
        .deleteOne({ _id: ObjectId(req.params.id) })
        .then( (response) => {
          console.log(`Deletado ${response.deletedCount} registros`)
        }).catch( (reason) => {
          console.log(reason);
        });

        let obj = db.collection('person')
        .find()
        .toArray();

        client.close();

        res.json(obj);
      });
    }
  };
}());
