const router = require('express').Router()
const { getAllUsers, getUserById, postUser, patchUser, deleteUser } = require('../users/users.services')

router.get('/users', getAllUsers)
router.post('/users', postUser)

router.get('/users/:id', getUserById)
router.patch('/users/:id', patchUser)
router.delete('/users/:id', deleteUser)

module.exports = router