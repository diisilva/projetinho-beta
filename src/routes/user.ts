import { Router } from "express";
import UserController from "../controllers/UserController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

const router = Router();

//Get all users
router.get("/", UserController.listAll);

// Get one user
router.get(
  "/:id",
  [checkJwt],
  UserController.getOneById
);

//Create a new user
router.post("/", 
// [checkJwt], 
UserController.newUser);

//Edit one user
router.patch(
  "/:id",
  [checkJwt],
  UserController.editUser
);

//Delete one user
router.delete(
  "/:id",
  [checkJwt],
  UserController.deleteUser
);

export default router;