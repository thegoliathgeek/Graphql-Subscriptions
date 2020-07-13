import ServerConfig from "./src/configs/server.config";
import chalk from 'chalk';
import dotenv from 'dotenv';
import {ApolloServer} from 'apollo-server-express';
import {buildSchemaSync} from 'type-graphql';
import 'reflect-metadata';
import {Resolvers} from "./src/graphql";

dotenv.config();
ServerConfig.getExpress().then((app) => {
    const schema = buildSchemaSync({
        resolvers: Resolvers()
    })
    const sever = new ApolloServer({schema});

    sever.applyMiddleware({app, path: '/ghl'});

    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Server started on port ${process.env.SERVER_PORT}`)
    });
}).catch((err) => {

    console.log(chalk.red(`Unable to start server on port ${process.env.SERVER_PORT}`))
});