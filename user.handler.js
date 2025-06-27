const Users = require('./User')

const User = {
    get: async (req, res) => {
        const { id } = req.params
        const user = await Users.findOne({ _id: id })
        res.status(200).send(user);
    },
    list: async (req, res) => {
        const users = await Users.find()
        res.status(200).send(users);
    },
    create: async (req, res) => {
        res.status(201).send('User created successfully');
    },
    update: async (req, res) => {
        res.status(204).send('User updated successfully');
    },
    destroy: async (req, res) => {
        res.status(204).send('User deleted successfully');
    },
}

module.exports = User;