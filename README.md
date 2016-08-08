demo-express-pouchdb-adapter-fs
=====

Demo of using [pouchdb-adapter-fs][] with [express-pouchdb][].

**Note:** not designed for production. See [fsdown][] for details.

Goals
----

* No hard-to-install native dependencies (leveldown, sqlite3, etc.)
* Full [express-pouchdb][] server, with replication, Fauxton, etc.
* Persistence (no in-memory adapter, MemDOWN. etc.)

Usage
-----

```
npm install
npm start
```

Then open `http://localhost:3000/_utils`.

Todos
---

Make the directory where data is stored configurable. Right now it writes to `.fsdown/`.

This is currently configurable in [fsdown][] but not yet in [pouchdb-adapter-fs][].

[express-pouchdb]: https://github.com/pouchdb/express-pouchdb
[pouchdb-adapter-fs]: https://github.com/nolanlawson/pouchdb-adapter-fs
[fsdown]: https://github.com/nolanlawson/fsdown
