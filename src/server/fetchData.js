const connection = require('./dbConnection').connection;
const constants = require('./utils/constants');
const dbName = constants.dbName;
const collectionName = constants.collectionName;

function fetchAllData(){
   return connection().then(conn =>{
       try{
           
        return conn.db(dbName).collection(collectionName).find({}).toArray();
       } catch(err){
        console.log(conn);
           console.log("collection not found");
           return Promise.resolve([]);
       }
        
    }).then(users=>{
        return users;
    })
}

module.exports = fetchAllData;
