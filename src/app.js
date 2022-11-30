// CONEXION CON LA BASE DE DATOS

const db = require('./utils/database')

db.authenticate()
.then(() => console.log('Database Authenticated'))
.catch(err => console.log(err))

db.sync()
.then(() => console.log('Database Synced'))
.catch(err => console.log(err))

// CONFIGURACIÓN DE LA APP

const express = require('express')

const app = express()
app.use(express.json())

const port = 9000
app.listen(port, () => {
  console.log(`Server started at port ${port}`)
})

// IMPORTAR LAS RUTAS

const usersRouter = require('./users/users.router')
app.use('/api/v2', usersRouter)