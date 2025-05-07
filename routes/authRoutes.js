const express = require('express');
const router = express.Router();
const { register, login, getUsuarios, logout } = require('../controllers/authController');
const validateToken = require('../middlewares/validateToken');
const { registerValidation, loginValidation } = require('../validators/userValidators');
const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errores: errors.array() });
  next();
};

router.post('/register', registerValidation, validate, register);
router.post('/login', loginValidation, validate, login);
router.get('/usuarios', validateToken, getUsuarios);
router.post('/logout', logout);

module.exports = router;
