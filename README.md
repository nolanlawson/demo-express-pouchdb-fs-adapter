demo-express-pouchdb-adapter-fs
=====

Demo of using [pouchdb-adapter-fs](https://github.com/nolanlawson/pouchdb-adpater-fs) with [express-pouchdb](https://github.com/pouchdb/express-pouchdb).

Goals
----

* No native dependencies (leveldown, sqlite3, etc.)
* Full `express-pouchdb` server, with replication, Fauxton, etc.
* Persistence (i.e. no memdown)

Usage:
-----

```
npm install
npm start
```

Then open `http://localhost:3000/_utils`.

Todos
---

Make the directory where data is stored configurable. Right now it writes to `.fsdown/`.

This is currently configurable in `fsdown` but not yet in `pouchdb-adapter-fs`.
