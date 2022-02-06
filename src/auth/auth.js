const router = require('express').Router()
const {models: {User}} = require("../db/models/User");

router.post("/login", async (req, res, next) => {
    try { 
        let user = await User.findByPk(req.body.id)
        if(!user) {
            user = await User.create(req.body)
        }
        res.json(user)
      } catch(error) {
        next(error)
      }
    })

router.post("/signup", async (req, res, next) => {
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

router.get("/me", async (req, res, next) => {
    try {
        const user = await User.findByPk(req.user.id)
        res.json(user)
        } catch(error) {
         next(error)
     }
  });

  router.put("update", async (req, res, next) => {
      try{
          const user = await User.findByPk(req.user.id);
          if(user) {
              res.json(await user.update(req.body))
          } else {
              res.status(401).send('User not found')
          }
      } catch (error) {
          next(error)
      }
  })