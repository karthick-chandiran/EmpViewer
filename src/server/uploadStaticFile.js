const fs = require('fs');
const mongoDB = require('mongodb');
const assert = require('assert');

const uri = "mongodb+srv://karthick:karthick@userdatabase-f1uei.mongodb.net/test?retryWrites=true&w=majority";
const mongoConn = new mongoDB.MongoClient(uri, { useNewUrlParser: true });

const uploadFile = (res) => { return mongoConn.connect((err, client) => {
    const db = client.db("filestorage");
    if (err) return console.dir(err);

    assert.ifError(err);

    var bucket = new mongoDB.GridFSBucket(db,{bucketName:'images'});

    return fs.createReadStream('./sample.jpg').
        pipe(bucket.openUploadStream('image1.jpg')).
        on('error', function (error) {
            assert.ifError(error);
        }).
        on('finish', function () {
            res.send("OK");
        });
});
}

module.exports = uploadFile;