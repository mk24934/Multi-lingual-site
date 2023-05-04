export const api = (path: string, data: any, method: "GET" | "POST" = "GET") => {
    return fetch(`http://134.209.248.214:3000/${path}`, {
        method,  
        headers: {"content-type": "application/json"},
        body: JSON.stringify(data) 
    })
}