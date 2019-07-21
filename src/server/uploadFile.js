const fs = require('fs');
const mongoDB = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const GridFSStorage = require('multer-gridfs-storage');
const assert = require('assert');
const multer = require('multer');

const uri = "mongodb+srv://karthick:karthick@userdatabase-f1uei.mongodb.net/test?retryWrites=true&w=majority";



const createUploadConnection = function () {

    try {

        const promise = MongoClient.connect(uri, { useNewUrlParser: true }).then(client => client.db('filestorage'));

        const storage = new GridFSStorage({
            db: promise,
            file: (req, file) => {
                // instead of an object a string is returned
                return {
                    bucketName: 'photos',
                    filename: 'file_' + Date.now(),
                    id: `id_${Date.now()}`
                }
                //'file_' + Date.now();
            }
        });

        storage.on('connectionFailed', (err) => {
            console.log(err);
        });
        storage.on('dbError',err=>{
            console.log(err);
            console.log("DB error");
        })

        return multer({ storage: storage });
    } catch (error) {
        console.log(error);
    }

};



module.exports.uploadFile = (req, res) => {
    console.log(req.files);
    const uploadStorage = createUploadConnection();
    const sUpload = uploadStorage.array('photos');

    sUpload(req, res, (err) => {
        if (err) { console.log(err) };

        res.send("file uploaded");
    })

};