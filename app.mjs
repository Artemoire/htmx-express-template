import path from "path";
import url from "url";
import express from "express";
import { z } from "zod";
import nunjucks from "nunjucks";
import { HomePage } from "./pages/home.page.mjs";
import "./pages/home.action.spice-up.mjs";
import { PetsPage } from "./pages/pets.page.mjs";

const DIRNAME = path.dirname(url.fileURLToPath(import.meta.url));

const envValidation = z.object({
  PORT: z.coerce.number(),
  HOSTNAME: z.literal("127.0.0.1"),
}).safeParse(process.env);

if (!envValidation.success) {
  console.log(...envValidation.error.issues);
  process.exit(-1);
}

const { PORT, HOSTNAME } = envValidation.data;

const app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  dev: true,
});

app.use('/public', express.static(path.join(DIRNAME, 'public')));
app.use('/', HomePage);
app.use('/pets', PetsPage);

app.listen(PORT, HOSTNAME, ()=> {
  console.log(`Server started on http://127.0.0.1:${PORT}`);
});