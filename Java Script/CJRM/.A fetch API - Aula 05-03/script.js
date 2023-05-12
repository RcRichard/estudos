const getUsers = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users =  await response.json()
    console.log(users)
}

getUsers()


//fetch('https://jsonplaceholder.typicode.com/users')
//.then(response => {
//    console.log(response)
//    return response.json()
//})
//.then(user => console.log(user))
//.catch()