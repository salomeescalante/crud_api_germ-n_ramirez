
const uuid = require('uuid')

const userDB = [{
    id: 'uuid',
	first_name: 'string',
	last_name: 'string',
	email: 'string',
	password: 'string',
	birthday: 'YYYY/MM/DD'
},

];

const getAllUsers = () => {
    return userDB
}

const getUserById = (id) => {

    const data = userDB.find(task => task.id === id)
    return data
}


const createUser = (title) => {
    const newUser = {
        id: uuid.v4(),
        title,
        is_completed: false,
    }

    userDB.push(newUser)
    return newUser
}

//? Regular export:

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}

console.log(createUser('Prueba')); 