import { Router } from "https://deno.land/x/oak/mod.ts";

const router: Router = new Router();

router.get("/", ({ response }) => {
  response.body = "Hello World";
});

export default router;
