# February 9th

- Have language routing working using the route, with the LocaleSwitcher
- Access token?
- Where to put these items? Currently on the page

- there were dependency issues, so to update, had to uninstall 
```
npm uninstall @sveltejs/adapter-node @sveltejs/adapter-vercel @sveltejs/kit vite
```

and reinstall with

```
npm install --save-dev @sveltejs/adapter-node @sveltejs/adapter-vercel @sveltejs/kit vite
```

- will need to generate a new key on StoryBlok 
- Can check the .env_example file in to github, so that later incase lose the .env file, know the structure of what is needed

```
# cd into @sveltekitjs in node_modules
npm exec svelte-kit -- sync
```

dynamic = in runtime
static = compiled in, so we want to use static since we want it to be static

when Vite starts, it reads the .env file, if it starts with PUBLIC_, then it is accessible in the client, such as +page.svelte, however +page.svelte cannot see private, however +page.ts can see both. For now the access token being public is fine, however later will want to put it in private, 

TODO: move storyblokInit into a page.server.ts file, then get the data, then return the data into the page