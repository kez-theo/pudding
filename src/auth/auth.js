const router = require('express').Router()
const User = require("../db/models/User");
const { checkAuth } = require('../auth-middleware.js')

router.post('/login', async (req, res, next) => {
    try { 
        let user = await User.findByPk(req.body.uid)
        if(!user) {
            user = await User.create(req.body)
        }
        res.json(user)
      } catch(error) {
        next(error)
      }
    })

router.post('/signup', async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user)
    } catch(error) {
        if(error.name === "SequelizeUniqueConstraintError") {
            res.status(401).json("User already exist")
        } else {
            next(error)
        }
    }
});

router.get('/me', checkAuth, async (req, res, next) => {
    try {
        const user = await User.findByPk(req.user.uid)
        res.json(user)
        } catch(error) {
         next(error)
     }
  });

  router.put('/update', checkAuth, async (req, res, next) => {
      try{
          const user = await User.findByPk(req.user.uid);
          if(user) {
              res.json(await user.update(req.body))
          } else {
              res.status(401).send('User not found')
          }
      } catch (error) {
          next(error)
      }
  })

  module.exports = router;