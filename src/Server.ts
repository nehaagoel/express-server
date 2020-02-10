import * as express from 'express';
import IConfig from './config/IConfig';
import * as bodyParser from 'body-parser';
import { errorHandler, notFoundRoute } from './libs';
import routes  from './router';
import Database from './libs/Database';

class Server {
    app: express.Application;
    constructor(private config: IConfig) {
        this.app = express();
    }
    bootstrap(): Server {
        this.initbodyParser();
        this.setupRoutes();
        return this;
    }
    initbodyParser(): void {
        const { app } = this;
        this.app.use(bodyParser.urlencoded({ extended: false }));

    }
    setupRoutes(): void {
        const { app } = this;
        this.app.get('/health-check', (req: express.Request, res: express.Response) => {
            res.send('I am OK');
        });
        this.app.use('/api', routes);
        this.app.use(notFoundRoute);
        this.app.use(errorHandler);
        }
        run() {
            const { app, config: { port, mongoUri } } = this;
            Database.open(mongoUri).then((res) => {
                this.app.listen(this.config.port, ( err) => {
                    if (err) {
                        console.log(err);
                        throw err;
                    }
                    console.log(`Server is running on ${this.config.port}`);
                });
            }).catch(err => {
                console.log(err);
            });
            // return this;
        }
}
export default Server;