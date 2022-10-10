# October 10th

## My notes

- The `handle` function in `hooks.server.ts` is not actully changing the route, just changing the header? Why is this important? The `load` function in `+layout.ts` does some redirect. Commented it out and I don't see what it does.
- Added a route `route_1`, typesafe-i18n automatically added text to `i18n-types.ts`, `i18n-util.async.ts`, `i18n-util.sync.ts`, `i18n-util.ts`, how did it do that, why, and can it scale?
- What are are these added text, and what is preventing it from loading on the routes page
- In the video Ivan mentioned the text for a page will only be loaded when the locale is set, such as for current or when switching the button, where in the code does it do this? Would an ifelse also have this ability? How to read the `network` tab in inspect mode (6:04)


## Chat notes

- `hooks.server.ts` only runs on server, takes the html and javascript and sends to the browser. So `page` runs twice, once on server, and once on browser, state takes latest version on server and loads it on client.
- files ending with `.server.ts` only runs on server and cannot run on the client, so Svelte cannot run in these files. The server being Node.js, Netlify, Vercel, etc. 
- With Netlify have an AWS lambda function waiting. This function enters the hooks.server.ts and decides what to run
- in `event` have url, path params, 
- `event` is coming from Node.js request, on Netlify coming from AWS request. SvelteKit hides this detail. The content will be the same. On local dev server there is no headers, when do it on Netlify, a `render` function does the server side code and can see it run in real time. We would see the same items + headers + some more.