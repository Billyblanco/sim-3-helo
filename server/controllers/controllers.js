module.exports = {
  register: (req, res) => {
    let { username, password} = req.body
    const db = req.app.get('db')
    db.createUser([username, password]).then(results => {
      res.status(200).send(results)
    }).catch(err => console.log('Register Error', err))
    
  },
  login: (req, res) => {
    let { username, password } = req.body
    const db = req.app.get('db')
    if ( username && password === username && password){
      db.login([username, password]).then(results => {
        res.sendStatus(results)
      })
    }
  }, 
  create: (req, res) => {
    let db = req.app.get('db')
    let { title, image, content } = req.body
    let author_id = req.session.user ?
    req.session.user.id : 1

    let newPost = { author_id, title, image, content }
    let posts = db.createPost(newPost)
    let post = posts[0]
    res.send(post)
  }, 
  read: (req, res) => {
    let db = req.app.get('db')
    let posts = db.getPosts()
    res.send(posts)
  }
}