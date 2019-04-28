import { homeHTML,addTripFormHtml } from './renderService';
function routes(app) {
    app.get('/', (req, res) => {
        res.send(homeHTML());
    });
    app.get('/addTrip', (req, res) => {
        res.send(addTripFormHtml());
    });
}

export default routes;