# October 24th

## My notes

- Review the `initRequestParametersDetector` change
- Added a route `route_1`, typesafe-i18n automatically added text to `i18n-types.ts`, `i18n-util.async.ts`, `i18n-util.sync.ts`, `i18n-util.ts`, how did it do that, why, and can it scale?
- What are are these added text, and what is preventing it from loading on the routes page

## Chat notes

- if a number exists it is truthy, if a 
- https header is different from the header at the top of an html page.
- a browser only knows about `GET` and `POST` requests. Other requests such as `PUT` and `DELETE` need to use a Javascript method. As such these other methods won't work if a user does not have Javascript enabled

- // this is the same as: npm run typesafe-i18n
- typesafe-i18n binary script file is waiting for changes to the translations. Looks at the source code, where the package is being used, then automatically adds anything missing. Requires the script to be running in the background, this is running as it was added to `package.json`. 
- likely a change to this in the future to make it plug-in (an extension in VS-code)

## TODO

 - include multiple detectors within the detectLocale