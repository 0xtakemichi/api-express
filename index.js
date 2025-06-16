const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://0xtakemichi:Womb4NastinessHandworkGalley@cluster0.xwv8nwh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

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