import express from "express";
import { pageContext } from "./context.page.mjs";
import { htmxContext } from "./context.htmx.mjs";

export const PetsPage = express.Router();

PetsPage.get('/', (req, res, _next) => {
  const page = pageContext('Pets');
  const htmx = htmxContext(req.headers);
  console.log('htmxContext@/pets', htmx);

  res.render('pets.page.html', {
    ...page,
    ...htmx,
  })
});