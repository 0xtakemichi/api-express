const mongoose = require('mongoose');
// change user, cluster and password
mongoose.connect('')

const User = mongoose.model('User', {
    username: String,
    age: Number,
})

const createUser = async () => {
    const user = new User({ username: 'takemi', age: 25 })
    const savedUser = await user.save()
    console.log(savedUser)
}

createUser()