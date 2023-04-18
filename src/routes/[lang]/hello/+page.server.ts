import type { PageServerLoad } from "./$types"

// fetch within here is a magic version of fetch, a wrapper around, so it is same plus additional things
export const load: PageServerLoad = async ({ fetch }) => {
    const message: string = await fetch('http://134.209.248.214:3000/day') // DigitalOcean link
        .then(response => response.text())
        // then passes input from previous into next, so if add a console.log in a .then here will change the return type to void
    console.log('message is: ', message)
        // .then(data => console.log(data))
        // .catch(error => console.error(error))
    // return { data: data as unknown as string }
    return { message }
}