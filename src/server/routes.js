const fetchAllData = require('./fetchData');
const uploadCallback = require('./uploadFile');
const readImage = require('./readFile')

function routes(app) {
    app.get('/users', (req, res) => {
        fetchAllData().then(data => {
            res.send(data);
        });

    })

    app.post('/uploadFormData',uploadCallback.uploadFile);

    app.get('/read', (req, res) => {
        readImage(res);
    });
}

module.exports = routes;