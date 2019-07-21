import { homeHTML,tripFromHTML } from './renderService';
function routes(app) {
    app.get('/', (req, res) => {
        res.send(homeHTML());
    });
    app.get('/createTrip', (req, res) => {
        res.send(tripFromHTML());
    });
}

export default routes;