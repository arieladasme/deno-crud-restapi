import { Router } from "https://deno.land/x/oak/mod.ts";
import * as crud from "../controllers/index.controllers.ts";

const router: Router = new Router();

router.get("/", ({ response }) => {
  response.body = "DENO API";
});

router.get("/users", crud.getUsers);

export default router;
