const mongoose = require('mongoose');
// change user, cluster and password
mongoose.connect('mongodb+srv://0xtakemichi:Refuse 3Hankie1 Traverse3 Cosigner Slab Voyage2 Latticed@cluster0.zhm2eyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

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

// UPDATE

const updateUser = async (id, username) => {
    const user = await User.findById(id)
    user.username = username
    const updatedUser = await user.save()
    console.log(updatedUser)
}
//updateUser('6852d6acd6154214145b3d41', 'alonso')

const updateUserAge = async (id, age) => {
    const user = await User.findById(id)
    user.age = age
    const updatedUser = await user.save()
    console.log(updatedUser)
}
// updateUserAge('6852d6acd6154214145b3d41', 30)

// DELETE

const deleteUser = async (id) => {
    const user = await User.findByIdAndDelete(id)
    console.log(user)
}
// deleteUser('6852d6acd6154214145b3d41')

const deleteAllUsers = async () => {
    const users = await User.deleteMany()
    console.log(users)
}
// deleteAllUsers()

const deleteOneUser = async (username) => {
    const user = await User.findOne({ username: username })
    console.log(user)
    if (user) {
        await user.remove()
        console.log('User deleted')
    } else {
        console.log('User not found')
    }
}
// deleteOneUser('felipe')