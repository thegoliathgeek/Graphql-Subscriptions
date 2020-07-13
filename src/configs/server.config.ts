import express from 'express';

export default class ServerConfig {
    static async getExpress() {
        const appExpress = express();
        appExpress.use(express.json());
        appExpress.use(express.urlencoded({extended: true}));
        appExpress.get('/', (req, res) => {
            res.json({
                error: false,
                msg: 'No errors'
            });
        })
        return appExpress;
    }
}