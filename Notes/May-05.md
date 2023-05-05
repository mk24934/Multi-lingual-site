# May 05

- In comparison to `load` which is a function, `actions` is a dictionary with a key `default` whose value is an async function, why are the different?
    - `actions` is being exported as a binding; maintainers of SvelteKit wanted a default action; if did not have default then we would need a named item
- If we add something like `action="/login"` then would we need to make a new key `login` for it to work? In what case do we need more than one kind of post request? 
- When we click the button on the site, is it sending this Post request to the server, which then sends another Post request?
    - HTTP request has start line, method POST in this case, target, which is the URI, and has the HTTP version, after that is the headers, as key-value pairs; we don't know how much data is in the body of the request, need to look at the content length header, tells us how many bytes are in the body; SvelteKit has to allocate memory for the data, parse it, and convert to JSON, this can be a long process, so it needs to be an asynchronous process
    - The client (the website) will send a Post request to the server (the +page.server.ts file in particular) then SvelteKit will run the appropriate function within the `actions` object which will then make *another* POST request to the external url.
- is `request` being destructed from `event` in the same way we did with the `load`?
- why need this to be `async` and `await`? Doesn't it make sense for it to run sequentially when the form is submitted?
- Had to add to `svelte.config.js` for cors `csrf`, why again do cors exist?
- Why are forms popular for POST request? Alternatively store the text in the boxes in stores, collect these into an interface, map to JSON and send JSON as POST request feels more direct REST API implementation to me
    - The form data
- It appears the page is reloading, is that normal and desired behaviour?
- Would user validation be done in a similar manner?

    - Progressive enhancement, has standardized processing for Forms and JSON
    - More than h1-tag being the largest header, it conveys that this is the main title