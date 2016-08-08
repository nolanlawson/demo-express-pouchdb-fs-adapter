var express = require('express')
var expressPouch = require('express-pouchdb')
var PouchDB = require('pouchdb-core')
  .plugin(require('pouchdb-replication'))
  .plugin(require('pouchdb-mapreduce'))
  .plugin(require('pouchdb-adapter-fs'))

var app = express()
app.use('/', expressPouch(PouchDB))
app.listen(3000, function () {
  console.log('listening on port 3000')
})