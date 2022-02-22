import { Router, Request, Response } from "express";
// import auth from "./auth";
import user from "./user";

const routes = Router();

// routes.use("/auth", auth);
routes.use("/user", user);

export default routes;

/*export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}
 ,{
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove" 
}];*/