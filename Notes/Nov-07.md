# November 07

- the `displaySettingsPage` should be in an `async` function because:
    - how functions in javascript work is like stacking pancakes that can only be eaten one (from the top at a time). So a slow function in this pancake stack will slow the other functions down
    - does not return a value so it has a `void` return type
    - `loadNamespaceAsync` is async since it is loading files, and it may be using an asynchronous method to do that. And since this function is an `async` function, therefore any function that uses it needs to be async as well
- a promise can return one of two things: resolve (no errors) or reject
- `async` and `await` are syntatic sugar to make promises in a more usable way
- `$page.params` is same as `event.params`
- in `$: lang = $page.params.lang` everything on the rhs of the equal sign is important and whenever it changes need to refresh the page, so don't need `lang` to be called afterwards