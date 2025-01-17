const router = require('express').Router()

const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://scode:admin@cluster0-6bmqd.mongodb.net/test?retryWrites=true&w=majority'

const client = new MongoClient(connectionString, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

client.connect(err => {
  if (err) {
    console.error(err)
  } else {
    console.log('Connected to mongodb')
    const db = client.db('test')

    // Get posts from MongoDB
    router.get('/api/posts', (req, res) => {
      // Query data from MongoDB
      db.collection('postsAmer').find({}).toArray((err, posts) => {
        if (err) {
          console.error(err)
        }
        // Return data as JSON
        res.json(posts)
      })
    })
    router.post('/api/posts', (req, res) => {
      db.collection('postsAmer').update({
        title: "I !"
        , text: "T you know?"
        , author: "Armin Subasic"
        , parent: null
        , insert_date: "2020-06-24T22:00:00.000Z"
      }, (err, data) => {
        if (err) return console.log(err);
        res.send(('saved to db: ' + data))
      })
    })
  }
})

module.exports = router
