import express from 'express';
import {PubSub} from 'apollo-server-express';

export default class ServerConfig {
    static async getExpress() {
        const appExpress = express();
        const pubsub = new PubSub();
        appExpress.use(express.json());
        appExpress.use(express.urlencoded({extended: true}));
        appExpress.use((req: any, res: any, next: any) => {
            req.pubsub = pubsub;
            next();
        });
        appExpress.get('/', (req, res) => {
            res.json({
                error: false,
                msg: 'No errors'
            });
        })
        return {appExpress, pubsub};
    }
}