const User = require('../users/users-model');

function logger(req, res, next) {
  console.log('\nLOGGER: ', { method: req.method, url: req.url, time: Date.now() });
  next();
}

function validateUserId(req, res, next) {
  User.getById(req.params.id)
    .then( response => {
      if (response) {
        req.user = response;
        next();
      } else {
        res.status(404).json({ message: "user not found" })
      }
    })
    .catch( err => {  
      res.status(500).json({ message: err.message })
    })
}

function validateUser(req, res, next) {
  if (!req.body.name){
    res.status(400).json({ message: "missing required name field" })
  } else {
    next();
  }
}

function validatePost(req, res, next) {
  if (!req.body.text){
    res.status(400).json({ message: "missing required text field" });
  } else {
    next();
  }
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
};
