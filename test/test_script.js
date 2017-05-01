// sample script to use node/express with postgre-sql 
const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000
const app = express()

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (request, response) => {
  response.render('home', {
    name: 'Ankur'
  })
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
'use strict'

const pg = require('pg')
const conString = 'postgres://postgres:1001cs08@localhost:5434/postgres' // make sure to match your own database's credentials

// pg.connect(conString, function (err, client, done) {
//   if (err) {
//     return console.error('error fetching client from pool', err)
//   }
//   client.query('SELECT $1::varchar AS my_first_query', ['node hero'], function (err, result) {
//     done()

//     if (err) {
//       return console.error('error happened during query', err)
//     }
//     console.log(result.rows[0])
//     process.exit(0)
//   })
// })

app.get('/users', function (req, res, next) {
  const user = req.body

  pg.connect(conString, function (err, client, done) {
    if (err) {
      // pass the error to the express error handler
      return next(err)
    }
    client.query('INSERT INTO users (name, age) VALUES ($1, $2);', ["ankur", 25], function (err, result) {
      done() //this done callback signals the pg driver that the connection can be closed or returned to the connection pool

      if (err) {
        // pass the error to the express error handler
        return next(err)
      }

      res.send(200)
    })
  })
})

app.get('/users/u1', function (req, res, next) {
  pg.connect(conString, function (err, client, done) {
    if (err) {
      // pass the error to the express error handler
      return next(err)
    }
    client.query('SELECT name, age FROM users;', [], function (err, result) {
      done()

      if (err) {
        // pass the error to the express error handler
        return next(err)
      }

      res.json(result.rows)
    })
  })
})
