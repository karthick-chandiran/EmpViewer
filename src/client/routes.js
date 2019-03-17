import { homeHTML,empFormHTML } from './renderService';
function routes(app) {
    app.get('/', (req, res) => {
        res.send(homeHTML());
    });
    app.get('/createEmployee', (req, res) => {
        res.send(empFormHTML());
    });
}

export default routes;