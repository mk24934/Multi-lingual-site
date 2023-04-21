# April 20th

- How to make a Post request? We had made the hello `+page.server.ts` post file, however how to make a post to the Nest server on Digital Ocean that is waiting for a Post request and how to send data?
    - By adding the `application/json` in headers, tells Nest what type of body is so it can decode the JSON, and makes the keys from it
    - [todo]: write a wrapper function for the +page.server.ts fetch function, there should be an example on SvelteKit site somewhere
    - if add any code within the `lib/server` folder, it can only be executed on the server
    - `fetch` in `load` is only available in the load function in the server
- In Nest it is using something called a decorator, such as: `@Injectable`, but if it is going to be added within the decorator `@Module` with the named key `providers`, is it really needed?
    - 