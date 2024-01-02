import express from "express";
import { pageContext } from "./context.page.mjs";
import { htmxContext } from "./context.htmx.mjs";

export const HomePage = express.Router();

HomePage.get('/', (req, res, _next) => {
  const page = pageContext('Home');
  const htmx = htmxContext(req.headers);

  console.log('htmxContext@/', htmx);
  res.render('home.page.html', {
    ...page,
    ...htmx,
  })
});