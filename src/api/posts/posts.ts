export function getPosts(data?: string) {
    return fetch(`https://jsonplaceholder.typicode.com/posts${data}`)
        .then((response) => response.json())
}

export function getPostsByUserId(id: string) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response) => response.json())
}