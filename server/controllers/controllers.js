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
  }
}