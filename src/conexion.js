const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'Actividad3';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Use connect method to connect to the Server

Insertar = function(collec, data){
  client.connect(function(err) {
    if(err){
      console.log(err);
      return;
    }
  
    console.log("Conectado al servidor");
    const db = client.db(dbName);

    const collection = connec.db.collection(collec);
    collection.insertOne(data
      ,(err, result) => {
        if(err){
            return console.log(err);
        }
        console.log('Registro Ingresado Correctamente');
      });

    client.close();
  })
}


module.exports = {
	Insertar
}
