const { check } = require('express-validator');

exports.registerValidation = [
  check('nombre').isLength({ max: 40 }).matches(/^[A-Za-z\s]+$/).withMessage('Nombre inválido'),
  check('apellidoPaterno').notEmpty().isLength({ max: 40 }).matches(/^[A-Za-z\s]+$/),
  check('apellidoMaterno').optional().isLength({ max: 40 }).matches(/^[A-Za-z\s]+$/),
  check('telefono').notEmpty().isLength({ min: 10, max: 10 }).isNumeric(),
  check('correo').optional().isEmail().isLength({ max: 40 }),
  check('username').notEmpty().isLength({ max: 30 }).matches(/^[A-Za-z0-9]+$/),
  check('password').notEmpty().isLength({ max: 20 }),
];

exports.loginValidation = [
  check('usuario').notEmpty(),
  check('password').notEmpty()
];
