import * as express from 'express';
import IConfig from './config/IConfig';
import * as bodyParser from 'body-parser';
import { errorHandler, notFoundRoute } from './libs';
import mainRoutes  from './router';
import Database from './libs/Database';
import * as swaggerJsDoc from 'swagger-jsdoc';
import * as swaggerUI from 'swagger-ui-express';
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
    initSwagger = () => {
        const options = {
            definition: {
                info: {
                    title: 'JavaScript-Client API',
                    version: '1.0.0',
                },
                securityDefinitions: {
                    Bearer: {
                        type: 'apiKey',
                        name: 'Authorization',
                        in: 'headers'
                    }
                }
            },
            basePath: '/api',
            swagger: '2.0',
            apis: ['./dist/src/controllers/**/routes.js'],
        };
        const swaggerSpec = swaggerJsDoc(options);
        return swaggerSpec;
    }
    initbodyParser(): void {
        const { app } = this;
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());

    }
    setupRoutes(): void {
        const { app } = this;
        app.use('/swagger', swaggerUI.serve, swaggerUI.setup(this.initSwagger()));
        this.app.get('/health-check', (req: express.Request, res: express.Response) => {
            res.send('I am OK');
        });
        this.app.use('/api', mainRoutes);
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
        }
}
export default Server;