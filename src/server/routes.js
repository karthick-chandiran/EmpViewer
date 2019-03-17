const fetchAllData = require('./fetchData');
function routes(app) {
    app.get('/users',(req,res)=>{
        fetchAllData().then(data=>{
            res.send(data);
        });
        
    })
}

module.exports = routes;