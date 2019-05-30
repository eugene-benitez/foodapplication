const Object = require('./models');
const User = require('./userModel')
const bcrypt = require('bcryptjs');

module.exports = {


    login: (req, res) => {
        const loginUser = req.body;
        const returnedUser = Object;

        User.findOne({ email: loginUser.email })
            .then(data => {
                console.log(data);
                const status = bcrypt.compareSync(loginUser.password, data.password);

                if (status) {
                    return res.json(data);
                }
                return null;
            })
            .catch(err => res.json(err));

    },


    register: (req, res) => {
        const newUser = req.body;
        newUser.password = bcrypt.hashSync(newUser.password, 10);

        User.create(newUser)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },


    getAll: (req, res) => {
        Object.find().sort({ 'type': 1 })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    addOne: (req, res) => {
        const newAuthor = req.body;
        Object.create(newAuthor)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    getOne: (req, res) => {
        const { id } = req.params;
        Object.findOne({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    updateOne: (req, res) => {
        const { id } = req.params;
        const data = req.body;
        Object.findOneAndUpdate({ _id: id }, data,
            { runValidators: true })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    deleteOne: (req, res) => {
        const { id } = req.params;
        Object.findByIdAndRemove({ _id: id })
            .then(data => req.json(data))
            .catch(err => res.json(err));
    },

}