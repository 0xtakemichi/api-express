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
        const user = new Users(req.body)
        const savedUser = await user.save()
        res.status(201).send(savedUser._id);
    },
    update: async (req, res) => {
        const { id } = req.params
        const user = await Users.findOne({ _id: id })
        Object.assign(user, req.body)
        await user.save()
        res.sendStatus(204)
    },
    destroy: async (req, res) => {
        try {
            const { id } = req.params
            const user = await Users.findOne({ _id: id })
            if (!user) {
                return res.status(404).json({ message: 'User not found' })
            }
            await user.deleteOne()
            res.sendStatus(204)
        } catch (error) {
            console.error('Error deleting user:', error)
            res.status(500).json({ message: 'Error deleting user', error: error.message })
        }
    },
}

module.exports = User;