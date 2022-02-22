import "reflect-metadata";
import * as express from "express";
import {Request, Response} from "express";
import * as bodyParser from "body-parser";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import routes from "./routes";

createConnection().then(async connection => {
    const app = express();
    app.use(bodyParser.json());
    app.set('env', process.env.APP_ENV);
    app.use(routes)
    
    /* Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    }); */

    app.listen(3000, () => {
        console.log("serv START ..");
    });
    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);
    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);
    // console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
