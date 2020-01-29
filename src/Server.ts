import * as express from 'express';
import IConfig from './config/IConfig';

class Server {
    app: express.Application;
    constructor(private config: IConfig) {
        this.app = express();
    }
    bootstrap() {
        this.setupRoutes();
        return this;
    }

    setupRoutes() {
        this.app.get('health-check', (req: express.Request, res: express.Response) => {
            res.send('I am OK');
        });
        }
        run() {
            this.app.listen(this.config.port, ( err) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
                console.log(`Server is running on ${this.config.port}`);
            });
            return this;
        }
}
export default Server;