const  createComments=(obj)=> {
    return fetch('https://jsonplaceholder.typicode.com/comments',
        {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(response => response.json())
}
export {createComments};
