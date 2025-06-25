const mongoose = require('mongoose');
// change user, cluster and password
mongoose.connect()

const User = mongoose.model('User', {
    username: String,
    age: Number,
})

const createUser = async () => {
    const user = new User({ username: 'felipe', age: 24 })
    const savedUser = await user.save()
    console.log(savedUser)
}
// createUser()

const getUsers = async () => {
    const users = await User.find()
    console.log(users)
}
// getUsers()

const getUserById = async (id) => {
    const user = await User.findById(id)
    console.log(user)
}
// getUserById('6852d6acd6154214145b3d41')

const getUserByUsername = async (username) => {
    const user = await User.find({ username: username })
    console.log(user)
}
// getUserByUsername('takemi')

const getOneUser = async (username) => {
    const user = await User.findOne({ username: username })
    console.log(user)
}
// getOneUser('felipe')