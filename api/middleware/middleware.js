const User = require('../users/users-model');

function logger(req, res, next) {
  console.log('\nLOGGER: ', { method: req.method, url: req.url, time: Date.now() });
  next();
}

function validateUserId(req, res, next) {
  User.getById(req.params.id)
    .then( response => {
      req.user = response;
      next();
    })
    .catch( err => {  
      res.status(404).json({ message: "user not found" })
    })
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
};
