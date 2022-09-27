# September 26th Notes

In +page.svelte
- Why is the argument to onMount a function? 
- Why does it return another function?

In +layout.ts
- When does the function `load` run, and how does it receive the arguments: `url` and `params` and what do they mean?
- The locale: Locales is something setting the type?

In hooks.server.ts
- How does this entire page work?
- When do the functions `handle` run
- How does it receive the arguments `event` and `resolve`, and what do they mean?
- What is `resolve` in the return?

In general
- What are `window` and `document`? And how do we know they are present?


browser takes the html, css, javascript into a document object model (DOM) (like a data structure), div, span, etc are html elements. DOM doesn't exist on server side. Svelte populates these into the DOM, once it is put into the DOM, it is now mounted. onMount registers our intention to run something (a function) when it is mounted. It is run asynchronous, may need resources such as a timer or database connection, these resources need to be held. The return is run when the component is unmounted. E.g. the interval is a resource the browser will be managing, as such it is within the browser scope, so if the component is unmounted it will continue running unless we remove it in the return.

Can think of the MDN items as our standard library, so these will be available in the browser. Read 'dom' page on MDN

Three things:
1. Javascript has its own std library.
2. Svelte[kit]
3. Browser runtime environment


The actual implementation of the key `HI` turns it into a function call

The arrow function doesn't have `this` where as a function defined with function will have. This will keep the arrow function purely functional

[lang] in routes is a paramter in `params` in the `load` function

`load` is run by Sveltekit so `url`, and `params` are known within it. Could replace `{ url, params }` with `events`, however doing it this way, destructures `url` and `params` from `events`. When `url` or `params` changes Sveltekit will rerun this `load` function. So e.g. if change the `lang` then it will re-run the `load` function

Hooks runs first, then loads the pages.

hooks -> layout -> page -> page rendering