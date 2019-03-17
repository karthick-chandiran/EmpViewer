const MongoClient = require('mongodb').MongoClient;
const constants = require('./utils/constants');
const uri = constants.uri;

exports.connection = ()=>{
    try{
        return MongoClient.connect(uri, { useNewUrlParser: true })
    } catch(err) {
        console.log("error occured in connection establishment");
    }
    
}

