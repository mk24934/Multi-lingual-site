import type { RequestHandler } from "@sveltejs/kit";

// this file will only run on the backend, not front end
export const GET: RequestHandler = () => {return new Response(JSON.stringify({'greeting': 'Hello World!'}), {headers: {'content-type': 'application/json'}})}