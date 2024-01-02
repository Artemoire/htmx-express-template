import { htmxContext } from "./context.htmx.mjs";
import { HomePage } from "./home.page.mjs";

HomePage.get('/spice-up', (req, res, _next) => {
  const htmx = htmxContext(req.headers);
  console.log('htmxContext@/spice-up', htmx);
  res.render('home.partial.spice-up.html', {
    ...htmx,
  })
});