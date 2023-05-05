import { api } from "$lib/server/api"
import type { PageServerLoad, Actions } from "./$types"

// fetch within here is a magic version of fetch, a wrapper around, so it is same plus additional things
export const load: PageServerLoad = async ({ fetch }) => {
    // wrapper_function(path, data)
    // const message: string = await fetch('http://134.209.248.214:3000/day', 
    // {
    //     method: "POST",  
    //     headers: {"content-type": "application/json"},
    //     body: JSON.stringify({day: "Thursday"}) 
    // }) // DigitalOcean link
    const message = await api('day', {day: "Thursday"}, "POST")
        .then(response => response.text())
        // then passes input from previous into next, so if add a console.log in a .then here will change the return type to void
    console.log('message is: ', message)
        // .then(data => console.log(data))
        // .catch(error => console.error(error))
    // return { data: data as unknown as string }
    return { message }
}

export const actions: Actions = {
    default: async ({ request }) => {
        console.log("button clicked")
        // a ? is added infront of toString because the return type of `get` could be null, 
        // so the ? is "nullesh coalescing" to prevent errors incase the `get` returns a null
        const { input } = await request.formData()
            .then((data) => ({ input: data.get('input')?.toString }))
            // .then(({input}) => {if (input === 'Monday') return {input}}) // a starting example of doing validation
        // const data = await request.formData()
        // const input = data.get('input')
        const message = await api('day', {day: input}, "POST")
            .then(response => response.text())
            console.log('message is: ', message
        )
        // const message = "abc"
        return { message }
    }
};