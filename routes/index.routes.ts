import { Router } from "https://deno.land/x/oak/mod.ts";
import * as crud from "../controllers/index.controllers.ts";

const router: Router = new Router();

router.get("/", ({ response }) => {
  response.body = "DENO API";
});

router.get("/users/:id", crud.getUser);
router.get("/users", crud.getUsers);
router.post("/users", crud.createUser);
router.delete("/users/:id", crud.deleteUser);
router.put("/users/:id", crud.updateUser);

export default router;
