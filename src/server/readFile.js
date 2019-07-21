const fs = require('fs');
const mongoDB = require('mongodb');
const assert = require('assert');
const uri = "mongodb+srv://karthick:karthick@userdatabase-f1uei.mongodb.net/test?retryWrites=true&w=majority";
const mongoConn = new mongoDB.MongoClient(uri, { useNewUrlParser: true });

const readImage = (res) => {
    return mongoConn.connect((err, client) => {
        const db = client.db("filestorage");
        if (err) return console.dir(err);

        assert.ifError(err);

        var bucket = new mongoDB.GridFSBucket(db, { bucketName: 'images' });
        console.log('reading');
        bucket.openDownloadStreamByName('image1.jpg')
            .on('error', () => {
                console.log('eroor on reading')
            })
            .on('end', () => {
                console.log(data)
                res.write("OK");
            })
    });
}

module.exports = readImage;