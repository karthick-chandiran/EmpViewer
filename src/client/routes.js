import { homeHTML } from './renderService';
function routes(app) {
    app.get('/', (req, res) => {
        res.send(homeHTML());
    });
}

export default routes;