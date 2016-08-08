demo-express-pouchdb-adapter-fs
=====

Demo of using `pouchdb-adapter-fs` with `express-pouchdb`. There is no leveldown dependency,
but we can have a fully persistent express-pouchdb server with replication, Fauxton, etc.

Usage:

```
npm install
npm start
```

Then open `http://localhost:3000/_utils`.

**TODOs:** make the directory where data is stored configurable. Right now it writes to `.fsdown/`.
