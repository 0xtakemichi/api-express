const User = {
    get: (req, res) => {
        res.status(200).send('User ' + req.params.id);
    },
    list: (req, res) => {
        res.status(200).send('List of users');
    },
    create: (req, res) => {
        res.status(201).send('User created successfully');
    },
    update: (req, res) => {
        res.status(204).send('User updated successfully');
    },
    destroy: (req, res) => {
        res.status(204).send('User deleted successfully');
    },
}

module.exports = User;