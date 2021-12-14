export function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
}

export function getUser(id: string) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
}